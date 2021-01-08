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
const React = __importStar(require("react"));
const enzyme_1 = require("enzyme");
const __1 = require("..");
describe("DiffSideBySide", () => {
    const someProps = {
        received: "reports/something/received.png",
        snapshot: "reports/something/snapshot.png",
        diff: "reports/something/diff.png",
        width: 100,
        height: 100,
    };
    it("looks as expected", () => {
        expect(enzyme_1.shallow(React.createElement(__1.DiffSideBySide, Object.assign({}, someProps)))).toMatchSnapshot();
    });
    [0, 1, 0.7].forEach(opacity => {
        it(`when setting the diff opacity to ${opacity}`, () => {
            const element = enzyme_1.shallow(React.createElement(__1.DiffSideBySide, Object.assign({}, someProps)));
            const input = element.find("input[type='range']");
            input.simulate("change", { currentTarget: { value: opacity } });
            expect(element).toMatchSnapshot();
            [
                element.find("div.viewer-container div.viewer-received div.viewer-diff img"),
                element.find("div.viewer-container div.viewer-snapshot div.viewer-diff img"),
            ].forEach(viewerDiffImg => {
                expect(viewerDiffImg.prop("style").opacity).toBe(opacity);
            });
        });
    });
});
//# sourceMappingURL=test-diff-side-by-side.js.map