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
const store_1 = require("../../../store");
describe("Main", () => {
    it("looks as expected", () => {
        expect(enzyme_1.shallow(React.createElement(__1.Main, null))).toMatchSnapshot();
    });
    it("looks as expected with no reports", () => {
        testResults.files = [];
        expect(enzyme_1.shallow(React.createElement(__1.Main, null))).toMatchSnapshot();
    });
    it("toggles the menu visibility", () => {
        const element = enzyme_1.shallow(React.createElement(__1.Main, null));
        expect(element.find("main").hasClass("is-9")).toBe(true);
        expect(element.find("main").hasClass("is-12")).toBe(false);
        tsdi.get(store_1.StoreUi).toggleMenu();
        element.update();
        expect(element).toMatchSnapshot();
        expect(element.find("main").hasClass("is-9")).toBe(false);
        expect(element.find("main").hasClass("is-12")).toBe(true);
        tsdi.get(store_1.StoreUi).toggleMenu();
        element.update();
        expect(element).toMatchSnapshot();
        expect(element.find("main").hasClass("is-9")).toBe(true);
        expect(element.find("main").hasClass("is-12")).toBe(false);
    });
});
//# sourceMappingURL=test-main.js.map