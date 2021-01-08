"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock("../to-match-image-snapshot");
const __1 = require("..");
const to_match_image_snapshot_1 = require("../to-match-image-snapshot");
describe("jestScreenshot", () => {
    const someBuffer = Buffer.alloc(10);
    it("uses `0` as relative threshold if no threshold is provided", () => {
        __1.setupJestScreenshot();
        expect(someBuffer).toMatchImageSnapshot();
        expect(to_match_image_snapshot_1.toMatchImageSnapshot).toHaveBeenCalledWith(someBuffer, { pixelThresholdRelative: 0 }, undefined);
    });
    it("throws an error if called outside of jest", () => {
        const originalExpect = expect;
        global.expect = undefined;
        originalExpect(() => __1.setupJestScreenshot()).toThrowErrorMatchingSnapshot();
        global.expect = originalExpect;
    });
});
//# sourceMappingURL=test-jest-screenshot.js.map