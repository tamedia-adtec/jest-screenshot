"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filenames_1 = require("../filenames");
const somePath = "/tmp/some-test.ts";
const someTestName = "something with some parameters does expected things";
const someSnapshotState = {
    _counters: new Map(),
    _updateSnapshot: "new",
    updated: 0,
    added: 0,
};
const expectedGeneratedName = "some-test-ts-something-with-some-parameters-does-expected-things-7-fcb3f.snap.png";
someSnapshotState._counters.set(someTestName, 7);
describe("getSnapshotFileName", () => {
    it("generates the expected default file name with no generator specified", () => {
        expect(filenames_1.getSnapshotFileName(somePath, someTestName, someSnapshotState)).toBe(expectedGeneratedName);
    });
});
describe("getSnapshotPath", () => {
    it("returns the expected path", () => {
        const expectedGeneratedPath = `/tmp/__snapshots__/${expectedGeneratedName}`;
        expect(filenames_1.getSnapshotPath(somePath, someTestName, someSnapshotState)).toBe(expectedGeneratedPath);
    });
    it("returns the expected path with a custom directory specified", () => {
        const snapshotsDir = "__some_directory__";
        const expectedGeneratedPath = `/tmp/__some_directory__/${expectedGeneratedName}`;
        const path = filenames_1.getSnapshotPath(somePath, someTestName, someSnapshotState, snapshotsDir);
        expect(path).toBe(expectedGeneratedPath);
    });
});
describe("getReportDir", () => {
    it("returns the expected path with a dir provided", () => {
        expect(filenames_1.getReportDir("my-reports")).toBe(`${process.cwd()}/my-reports`);
    });
    it("returns the expected path with no dir provided", () => {
        expect(filenames_1.getReportDir()).toBe(`${process.cwd()}/jest-screenshot-report`);
    });
});
describe("getReportPath", () => {
    it("returns the expected path", () => {
        expect(filenames_1.getReportPath(somePath, someTestName, someSnapshotState))
            .toBe(`${process.cwd()}/jest-screenshot-report/reports/${expectedGeneratedName}`);
    });
});
//# sourceMappingURL=test-filenames.js.map