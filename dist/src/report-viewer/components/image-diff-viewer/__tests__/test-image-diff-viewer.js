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
describe("ImageDiffViewer", () => {
    it("looks as expected", () => {
        expect(enzyme_1.shallow(React.createElement(__1.ImageDiffViewer, { received: "reports/something/received.png", snapshot: "reports/something/snapshot.png", diff: "reports/something/diff.png", width: 100, height: 100 }))).toMatchSnapshot();
    });
    [0, 1, 2].forEach(index => {
        it(`when clicking on tab #${index}`, () => {
            const element = enzyme_1.shallow(React.createElement(__1.ImageDiffViewer, { received: "reports/something/received.png", snapshot: "reports/something/snapshot.png", diff: "reports/something/diff.png", width: 100, height: 100 }));
            const liElementsBeforeClick = element.find("li");
            for (let i = 0; i < liElementsBeforeClick.length; ++i) {
                expect(liElementsBeforeClick.at(i).hasClass("is-active")).toBe(i === 0);
            }
            element.find("li").at(index).find("a").simulate("click");
            expect(element).toMatchSnapshot();
            const liElementsAfterClick = element.find("li");
            for (let i = 0; i < liElementsAfterClick.length; ++i) {
                expect(liElementsAfterClick.at(i).hasClass("is-active")).toBe(i === index);
            }
        });
    });
});
//# sourceMappingURL=test-image-diff-viewer.js.map