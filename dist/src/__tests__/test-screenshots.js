"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const fs_1 = require("fs");
describe("screenshots", () => {
    beforeEach(() => {
        __1.setupJestScreenshot();
    });
    it("stackoverflow", () => {
        expect(() => {
            expect(fs_1.readFileSync(`${__dirname}/fixtures/screenshot-stackoverflow.png`)).toMatchImageSnapshot();
        }).toThrowErrorMatchingSnapshot();
    });
    it("npmjs", () => {
        expect(() => {
            expect(fs_1.readFileSync(`${__dirname}/fixtures/screenshot-npmjs.png`)).toMatchImageSnapshot();
        }).toThrowErrorMatchingSnapshot();
    });
});
//# sourceMappingURL=test-screenshots.js.map