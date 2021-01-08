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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const enzyme_1 = require("enzyme");
const __1 = require("..");
const store_1 = require("../../../../store");
describe("DiffSlider", () => {
    const someProps = {
        received: "reports/something/received.png",
        snapshot: "reports/something/snapshot.png",
        diff: "reports/something/diff.png",
        width: 100,
        height: 100,
    };
    beforeEach(() => {
        HTMLDivElement.prototype.getBoundingClientRect = () => ({
            top: 10, left: 10, right: 10, bottom: 10, width: 100, height: 100,
        });
    });
    it("looks as expected", () => {
        expect(enzyme_1.shallow(React.createElement(__1.DiffSlider, Object.assign({}, someProps)))).toMatchSnapshot();
    });
    [0, 1, 0.7].forEach(opacity => {
        it(`when setting the diff opacity to ${opacity}`, () => {
            const element = enzyme_1.shallow(React.createElement(__1.DiffSlider, Object.assign({}, someProps)));
            const input = element.find("input[type='range']");
            input.simulate("change", { currentTarget: { value: opacity } });
            expect(element).toMatchSnapshot();
            expect(element.find("div.viewer-container div.viewer-diff img").prop("style").opacity).toBe(opacity);
        });
    });
    it("moves the slider when dragging on the image", () => {
        const element = enzyme_1.mount(React.createElement(__1.DiffSlider, Object.assign({}, someProps)));
        const container = element.find("div.viewer-container");
        container.simulate("mousedown", { clientX: 60 });
        expect(element).toMatchSnapshot();
        expect(element.find("div.slider").prop("style").left).toBe("50%");
        expect(element.find("div.viewer-received").prop("style").width).toBe("50%");
        container.simulate("mousemove", { clientX: 85 });
        expect(element).toMatchSnapshot();
        expect(element.find("div.slider").prop("style").left).toBe("75%");
        expect(element.find("div.viewer-received").prop("style").width).toBe("75%");
        container.simulate("mouseup");
        container.simulate("mousemove", { clientX: 110 });
        expect(element).toMatchSnapshot();
        expect(element.find("div.slider").prop("style").left).toBe("75%");
        expect(element.find("div.viewer-received").prop("style").width).toBe("75%");
    });
    it("reacts to the window resizing", () => {
        const element = enzyme_1.mount(React.createElement(__1.DiffSlider, Object.assign({}, someProps)));
        HTMLDivElement.prototype.getBoundingClientRect = () => ({
            top: 10, left: 10, right: 10, bottom: 10, width: 200, height: 100,
        });
        window.dispatchEvent(new Event("resize"));
        expect(element.find("div.viewer-container").instance().style.height).toBe("200px");
        [
            element.find("div.viewer-diff img"),
            element.find("div.viewer-received img"),
            element.find("div.viewer-snapshot img"),
        ].forEach(img => {
            const imgInstance = img.instance();
            expect(imgInstance.style.width).toBe("200px");
            expect(imgInstance.style.height).toBe("200px");
            expect(imgInstance.width).toBe(200);
            expect(imgInstance.height).toBe(200);
        });
    });
    it("reacts to the sidebar being toggled", () => __awaiter(void 0, void 0, void 0, function* () {
        const element = enzyme_1.mount(React.createElement(__1.DiffSlider, Object.assign({}, someProps)));
        HTMLDivElement.prototype.getBoundingClientRect = () => ({
            top: 10, left: 10, right: 10, bottom: 10, width: 200, height: 100,
        });
        tsdi.get(store_1.StoreUi).toggleMenu();
        yield new Promise(resolve => setTimeout(resolve, 1));
        expect(element.find("div.viewer-container").instance().style.height).toBe("200px");
        [
            element.find("div.viewer-diff img"),
            element.find("div.viewer-received img"),
            element.find("div.viewer-snapshot img"),
        ].forEach(img => {
            const imgInstance = img.instance();
            expect(imgInstance.style.width).toBe("200px");
            expect(imgInstance.style.height).toBe("200px");
            expect(imgInstance.width).toBe(200);
            expect(imgInstance.height).toBe(200);
        });
    }));
});
//# sourceMappingURL=test-diff-slider.js.map