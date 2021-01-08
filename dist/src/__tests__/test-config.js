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
const config_1 = require("../config");
const fs_1 = require("fs");
const rimraf = __importStar(require("rimraf"));
describe("config()", () => {
    let oldCwd;
    const tmpPath = `${process.cwd()}/tmp-test-config`;
    beforeEach(() => {
        fs_1.mkdirSync(tmpPath);
        process.cwd = () => tmpPath;
    });
    afterEach(() => {
        rimraf.sync(tmpPath);
        process.cwd = oldCwd;
    });
    it("detects the configuration with the package.json containing a config", () => {
        const someConfig = {
            snapshotsDir: "__image_snapshots__",
            pixelThresholdAbsolute: 90,
        };
        fs_1.writeFileSync(`${tmpPath}/package.json`, JSON.stringify({
            jestScreenshot: someConfig,
        }));
        expect(config_1.config()).toEqual(someConfig);
    });
    it("detects the configuration with a config file", () => {
        const someConfig = {
            snapshotsDir: "__screenshot_snapshots__",
            pixelThresholdAbsolute: 1000,
        };
        fs_1.writeFileSync(`${tmpPath}/jest-screenshot.json`, JSON.stringify(someConfig));
        expect(config_1.config()).toEqual(someConfig);
    });
    it("detects the merged configuration with both config file and package.json config present", () => {
        const someConfigPackage = {
            snapshotsDir: "__package_snapshots__",
            pixelThresholdAbsolute: 1000,
            colorThreshold: 0.3,
        };
        const someConfigFile = {
            snapshotsDir: "__config_snapshots__",
            pixelThresholdAbsolute: 100,
            pixelThresholdRelative: 0.5,
        };
        fs_1.writeFileSync(`${tmpPath}/jest-screenshot.json`, JSON.stringify(someConfigFile));
        fs_1.writeFileSync(`${tmpPath}/package.json`, JSON.stringify({
            jestScreenshot: someConfigPackage,
        }));
        expect(config_1.config()).toEqual({
            snapshotsDir: "__config_snapshots__",
            pixelThresholdAbsolute: 100,
            pixelThresholdRelative: 0.5,
            colorThreshold: 0.3,
        });
    });
    it("detects a sane default configuration without a configuration present", () => {
        expect(config_1.config()).toEqual({
            pixelThresholdRelative: 0,
        });
    });
    it("throws an error with a broken package.json", () => {
        fs_1.writeFileSync(`${tmpPath}/package.json`, "{");
        expect(() => config_1.config()).toThrowErrorMatchingSnapshot();
    });
    it("throws an error with a broken config file", () => {
        fs_1.writeFileSync(`${tmpPath}/jest-screenshot.json`, "{");
        expect(() => config_1.config()).toThrowErrorMatchingSnapshot();
    });
});
//# sourceMappingURL=test-config.js.map