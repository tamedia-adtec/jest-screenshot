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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDiffViewer = void 0;
const React = __importStar(require("react"));
const bulma = __importStar(require("bulma"));
const mobx_react_1 = require("mobx-react");
const mobx_1 = require("mobx");
const bind_1 = __importDefault(require("classnames/bind"));
const lodash_decorators_1 = require("lodash-decorators");
const css = __importStar(require("./image-diff-viewer.scss"));
const diff_slider_1 = require("./diff-slider");
const diff_blend_1 = require("./diff-blend");
const diff_side_by_side_1 = require("./diff-side-by-side");
const cx = bind_1.default.bind(Object.assign(Object.assign({}, bulma), css));
var Tab;
(function (Tab) {
    Tab["Slider"] = "slider";
    Tab["SideBySide"] = "side-by-side";
    Tab["Blend"] = "blend";
})(Tab || (Tab = {}));
let ImageDiffViewer = class ImageDiffViewer extends React.Component {
    constructor() {
        super(...arguments);
        this.tab = Tab.Slider;
    }
    get sliderTabActive() { return this.tab === Tab.Slider; }
    get sideBySideTabActive() { return this.tab === Tab.SideBySide; }
    get blendTabActive() { return this.tab === Tab.Blend; }
    handleSliderTabClick() { this.tab = Tab.Slider; }
    handleBlendTabClick() { this.tab = Tab.Blend; }
    handleSideBySideTabClick() { this.tab = Tab.SideBySide; }
    renderDiff() {
        const { received, snapshot, diff, width, height } = this.props;
        switch (this.tab) {
            case Tab.Slider:
                return (React.createElement(diff_slider_1.DiffSlider, { received: received, snapshot: snapshot, diff: diff, width: width, height: height }));
            case Tab.Blend:
                return (React.createElement(diff_blend_1.DiffBlend, { received: received, snapshot: snapshot, diff: diff, width: width, height: height }));
            case Tab.SideBySide:
                return (React.createElement(diff_side_by_side_1.DiffSideBySide, { received: received, snapshot: snapshot, diff: diff, width: width, height: height }));
        }
    }
    render() {
        return (React.createElement("article", null,
            React.createElement("div", { className: cx("tabs", "is-toggle", "is-center", "is-fullwidth") },
                React.createElement("ul", null,
                    React.createElement("li", { className: cx({ "is-active": this.sliderTabActive }) },
                        React.createElement("a", { onClick: this.handleSliderTabClick }, "Slider")),
                    React.createElement("li", { className: cx({ "is-active": this.sideBySideTabActive }) },
                        React.createElement("a", { onClick: this.handleSideBySideTabClick }, "Side-by-side")),
                    React.createElement("li", { className: cx({ "is-active": this.blendTabActive }) },
                        React.createElement("a", { onClick: this.handleBlendTabClick }, "Blend")))),
            this.renderDiff()));
    }
};
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], ImageDiffViewer.prototype, "tab", void 0);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ImageDiffViewer.prototype, "sliderTabActive", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ImageDiffViewer.prototype, "sideBySideTabActive", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ImageDiffViewer.prototype, "blendTabActive", null);
__decorate([
    lodash_decorators_1.bind,
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageDiffViewer.prototype, "handleSliderTabClick", null);
__decorate([
    lodash_decorators_1.bind,
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageDiffViewer.prototype, "handleBlendTabClick", null);
__decorate([
    lodash_decorators_1.bind,
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageDiffViewer.prototype, "handleSideBySideTabClick", null);
ImageDiffViewer = __decorate([
    mobx_react_1.observer
], ImageDiffViewer);
exports.ImageDiffViewer = ImageDiffViewer;
//# sourceMappingURL=image-diff-viewer.js.map