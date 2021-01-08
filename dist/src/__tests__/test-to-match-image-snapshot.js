"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const to_match_image_snapshot_1 = require("../to-match-image-snapshot");
const fs_1 = require("fs");
const rimraf = __importStar(require("rimraf"));
function getJestTestConfiguration() {
    let testConfiguration;
    expect.extend({
        storeSnapshotState() {
            testConfiguration = this;
            return {
                pass: true,
                message() { return ""; },
            };
        },
    });
    expect().storeSnapshotState();
    return testConfiguration;
}
describe("toMatchImageSnapshot", () => {
    let testConfig;
    let originalUpdateSnapshot;
    beforeEach(() => {
        __1.setupJestScreenshot();
    });
    beforeEach(() => {
        testConfig = getJestTestConfiguration();
        originalUpdateSnapshot = testConfig.snapshotState._updateSnapshot;
        try {
            fs_1.unlinkSync(`${process.cwd()}/jest-screenshot.json`);
        }
        catch (err) {
            return;
        }
    });
    afterEach(() => {
        testConfig.snapshotState._updateSnapshot = originalUpdateSnapshot;
    });
    describe("with no threshold provided", () => {
        it("detects a matching snapshot as matching", () => {
            expect(() => {
                expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-gradient.png`)).toMatchImageSnapshot();
            }).not.toThrowError();
        });
        [
            { colorThreshold: 0.0 },
            { colorThreshold: 0.1 },
            { colorThreshold: 0.5 },
            { colorThreshold: 0.6 },
        ].forEach(({ colorThreshold }) => {
            it(`with a color threshold of ${colorThreshold} detects the snapshot as not matching`, () => {
                fs_1.writeFileSync(`${process.cwd()}/jest-screenshot.json`, JSON.stringify({ colorThreshold }));
                __1.setupJestScreenshot();
                expect(() => {
                    expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot();
                }).toThrowErrorMatchingSnapshot();
            });
        });
        [
            { colorThreshold: 0.7 },
            { colorThreshold: 1.0 },
        ].forEach(({ colorThreshold }) => {
            it(`with a color threshold of ${colorThreshold} detects the snapshot as matching`, () => {
                fs_1.writeFileSync(`${process.cwd()}/jest-screenshot.json`, JSON.stringify({ colorThreshold }));
                __1.setupJestScreenshot();
                expect(() => {
                    expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot();
                }).not.toThrowError();
            });
        });
    });
    describe("with an absolute threshold provided", () => {
        const colorThreshold = 0.6;
        it("fails with an absolute threshold of 204", () => {
            const pixelThresholdAbsolute = 204;
            fs_1.writeFileSync(`${process.cwd()}/jest-screenshot.json`, JSON.stringify({
                colorThreshold,
                pixelThresholdAbsolute,
            }));
            __1.setupJestScreenshot();
            expect(() => {
                expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot();
            }).toThrowErrorMatchingSnapshot();
        });
        it("passes with an absolute threshold of 205", () => {
            const pixelThresholdAbsolute = 205;
            fs_1.writeFileSync(`${process.cwd()}/jest-screenshot.json`, JSON.stringify({
                colorThreshold,
                pixelThresholdAbsolute,
            }));
            __1.setupJestScreenshot();
            expect(() => {
                expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot();
            }).not.toThrowError();
        });
    });
    describe("with `.not` specified", () => {
        it("fails always", () => {
            expect(() => {
                expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).not.toMatchImageSnapshot();
            }).toThrowErrorMatchingSnapshot();
        });
    });
    describe("when called outside of a jest unit test context", () => {
        it("fails", () => {
            expect(function () {
                to_match_image_snapshot_1.toMatchImageSnapshot(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`), {});
            }.bind({})).toThrowErrorMatchingSnapshot();
        });
    });
    describe("with the snapshot not matching", () => {
        const snapshotToUpdatePath = `${__dirname}/__snapshots__/test-to-match-image-snapshot-ts-to-match-image-snapshot-with-the-snapshot-not-matching-updates-the-snapshot-when-updating-is-enabled-1-d8503.snap.png`; // tslint:disable-line
        const originalContent = fs_1.readFileSync(snapshotToUpdatePath);
        afterEach(() => {
            try {
                fs_1.writeFileSync(snapshotToUpdatePath, originalContent);
            }
            catch (err) {
                return;
            }
        });
        it("updates the snapshot when updating is enabled", () => {
            const expectedContent = fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`);
            expect(() => {
                testConfig.snapshotState._updateSnapshot = "all";
                expect(expectedContent).toMatchImageSnapshot();
            }).not.toThrowError();
            expect(fs_1.readFileSync(snapshotToUpdatePath)).toEqual(expectedContent);
        });
        it("fails when updating is disabled", () => {
            expect(() => {
                testConfig.snapshotState._updateSnapshot = "none";
                expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot();
            }).toThrowErrorMatchingSnapshot();
            expect(fs_1.readFileSync(snapshotToUpdatePath)).toEqual(originalContent);
        });
    });
    describe("with the snapshot not existing", () => {
        const snapshotToCreatePath1 = `${__dirname}/__snapshots__/test-to-match-image-snapshot-ts-to-match-image-snapshot-with-the-snapshot-not-existing-creates-the-snapshot-when-updating-is-enabled-1-14292.snap.png`; // tslint:disable-line
        const snapshotToCreatePath2 = `${__dirname}/__snapshots__/test-to-match-image-snapshot-ts-to-match-image-snapshot-with-the-snapshot-not-existing-creates-the-snapshot-when-updating-is-enabled-2-078e4.snap.png`; // tslint:disable-line
        afterEach(() => {
            try {
                fs_1.unlinkSync(snapshotToCreatePath1);
                fs_1.unlinkSync(snapshotToCreatePath2);
            }
            catch (err) {
                return;
            }
        });
        it("fails when updating is disabled", () => {
            expect(() => {
                testConfig.snapshotState._updateSnapshot = "none";
                expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot();
            }).toThrowErrorMatchingSnapshot();
        });
        it("creates the snapshot when updating is enabled", () => {
            expect(fs_1.existsSync(snapshotToCreatePath1)).toBe(false);
            expect(fs_1.existsSync(snapshotToCreatePath2)).toBe(false);
            expect(() => {
                testConfig.snapshotState._updateSnapshot = "all";
                expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot();
                expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot();
            }).not.toThrowError();
            expect(fs_1.existsSync(snapshotToCreatePath1)).toBe(true);
            expect(fs_1.existsSync(snapshotToCreatePath2)).toBe(true);
        });
    });
    it("after a failing snapshot test creates the necessary reports", () => {
        rimraf.sync(`${process.cwd()}/jest-screenshot-report`);
        __1.setupJestScreenshot();
        expect(() => {
            expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot();
        }).toThrowError();
        const snapshotFilename = "test-to-match-image-snapshot-ts-to-match-image-snapshot-after-a-failing-snapshot-test-creates-the-necessary-reports-1-86dd5.snap.png"; // tslint:disable-line
        const contents = fs_1.readdirSync(`${process.cwd()}/jest-screenshot-report/reports`);
        expect(contents).toContain(snapshotFilename);
        const snapshotContents = fs_1.readdirSync(`${process.cwd()}/jest-screenshot-report/reports/${snapshotFilename}`);
        expect(snapshotContents).toEqual([
            "diff.png",
            "info.json",
            "received.png",
            "snapshot.png",
        ]);
        const infoFileContents = fs_1.readFileSync(`${process.cwd()}/jest-screenshot-report/reports/${snapshotFilename}/info.json`, "utf8");
        expect(JSON.parse(infoFileContents)).toMatchSnapshot();
    });
    it("doesn't create a report with `noReport` set to `true`", () => {
        rimraf.sync(`${process.cwd()}/jest-screenshot-report`);
        fs_1.writeFileSync(`${process.cwd()}/jest-screenshot.json`, JSON.stringify({ noReport: true }));
        __1.setupJestScreenshot();
        expect(() => {
            expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot();
        }).toThrowError();
        expect(fs_1.existsSync(`${process.cwd()}/jest-screenshot-report`)).toBe(false);
        fs_1.unlinkSync(`${process.cwd()}/jest-screenshot.json`);
    });
    describe("with a custom path provided", () => {
        const path = `${__dirname}/custom-path.png`;
        beforeAll(() => {
            rimraf.sync(`${process.cwd()}/jest-screenshot-report`);
            __1.setupJestScreenshot();
        });
        afterAll(() => {
            fs_1.unlinkSync(path);
        });
        it("writes a new screenshot", () => {
            expect(() => {
                testConfig.snapshotState._updateSnapshot = "all";
                expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-gradient.png`)).toMatchImageSnapshot({
                    path,
                });
            }).not.toThrowError();
            expect(fs_1.existsSync(path)).toBe(true);
        });
        it("fails with a non-matching screenshot", () => {
            expect(() => {
                testConfig.snapshotState._updateSnapshot = "none";
                expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot({
                    path,
                });
            }).toThrowErrorMatchingSnapshot();
        });
        it("fails with a non-matching screenshot and writes the report", () => {
            expect(() => {
                testConfig.snapshotState._updateSnapshot = "none";
                expect(fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`)).toMatchImageSnapshot({
                    path,
                });
            }).toThrowErrorMatchingSnapshot();
            const snapshotFilename = "test-to-match-image-snapshot-ts-to-match-image-snapshot-with-a-custom-path-provided-fails-with-a-non-matching-screenshot-and-writes-the-report-1-e3f07.snap.png"; // tslint:disable-line
            const contents = fs_1.readdirSync(`${process.cwd()}/jest-screenshot-report/reports`);
            expect(contents).toContain(snapshotFilename);
        });
        it("updates the snapshot when updating is enabled", () => {
            const expectedContent = fs_1.readFileSync(`${__dirname}/fixtures/red-rectangle-example-red.png`);
            expect(() => {
                testConfig.snapshotState._updateSnapshot = "all";
                expect(expectedContent).toMatchImageSnapshot({ path });
            }).not.toThrowError();
            expect(fs_1.readFileSync(path)).toEqual(expectedContent);
        });
    });
});
//# sourceMappingURL=test-to-match-image-snapshot.js.map