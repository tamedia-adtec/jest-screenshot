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
exports.DiffSlider = void 0;
const React = __importStar(require("react"));
const bulma = __importStar(require("bulma"));
const mobx_react_1 = require("mobx-react");
const tsdi_1 = require("tsdi");
const mobx_1 = require("mobx");
const bind_1 = __importDefault(require("classnames/bind"));
const lodash_decorators_1 = require("lodash-decorators");
const store_1 = require("../../../store");
const css = __importStar(require("./diff-slider.scss"));
const cx = bind_1.default.bind(Object.assign(Object.assign({}, bulma), css));
let DiffSlider = class DiffSlider extends React.Component {
    constructor() {
        super(...arguments);
        this.dragging = false;
        this.sliderX = 0.5;
        this.diffOpacity = 0.5;
    }
    initialize() {
        const rerender = () => {
            this.forceUpdate();
            this.adjustSizes();
        };
        window.addEventListener("resize", rerender);
        mobx_1.reaction(() => this.ui.menuVisible, () => {
            setTimeout(() => rerender(), 0);
        });
    }
    get aspectRatio() { return this.props.height / this.props.width; }
    handleDragStart(event) {
        this.dragging = true;
        this.slide(event);
    }
    handleDragStop() { this.dragging = false; }
    handleDrag(event) {
        if (!this.dragging) {
            return;
        }
        this.slide(event);
    }
    slide(event) {
        const { left, width } = this.container.getBoundingClientRect();
        this.sliderX = (event.clientX - left) / width;
        event.stopPropagation();
        event.preventDefault();
    }
    refContainer(element) {
        this.container = element;
        this.adjustSizes();
    }
    refImageReceived(element) {
        this.imageReceived = element;
        this.adjustSizes();
    }
    refImageSnapshot(element) {
        this.imageSnapshot = element;
        this.adjustSizes();
    }
    refImageDiff(element) {
        this.imageDiff = element;
        this.adjustSizes();
    }
    adjustSizes() {
        if (!this.imageDiff || !this.container || !this.imageReceived || !this.imageSnapshot) {
            return;
        }
        const { width: containerWidth } = this.container.getBoundingClientRect();
        const containerHeight = this.aspectRatio * containerWidth;
        this.container.style.height = `${containerHeight}px`;
        [this.imageDiff, this.imageReceived, this.imageSnapshot].forEach(image => {
            image.width = containerWidth;
            image.height = containerHeight;
            image.style.width = `${containerWidth}px`;
            image.style.height = `${containerHeight}px`;
        });
    }
    handleDiffOpacity(event) {
        this.diffOpacity = Number(event.currentTarget.value);
    }
    render() {
        const { received, snapshot, diff } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement("nav", { className: cx("level", "settings") },
                React.createElement("div", { className: cx("level-item", "has-text-centered") },
                    React.createElement("div", null,
                        React.createElement("div", { className: cx("heading") }, "Diff Opacity"),
                        React.createElement("input", { className: cx("title"), type: "range", min: 0, max: 1, step: "any", value: this.diffOpacity, onChange: this.handleDiffOpacity })))),
            React.createElement("div", { onMouseDown: this.handleDragStart, onMouseLeave: this.handleDragStop, onMouseUp: this.handleDragStop, onMouseMove: this.handleDrag, className: cx("viewer-container"), ref: this.refContainer },
                React.createElement("div", { className: cx("slider"), style: { left: `${this.sliderX * 100}%` } },
                    React.createElement("div", { className: cx("top") }),
                    React.createElement("div", { className: cx("bottom") })),
                React.createElement("div", { className: cx("viewer-diff") },
                    React.createElement("img", { ref: this.refImageDiff, src: diff, style: { opacity: this.diffOpacity } })),
                React.createElement("div", { className: cx("viewer-received"), style: { width: `${this.sliderX * 100}%` } },
                    React.createElement("img", { ref: this.refImageReceived, src: received })),
                React.createElement("div", { className: cx("viewer-snapshot") },
                    React.createElement("img", { ref: this.refImageSnapshot, src: snapshot })))));
    }
};
__decorate([
    tsdi_1.inject,
    __metadata("design:type", store_1.StoreUi)
], DiffSlider.prototype, "ui", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], DiffSlider.prototype, "dragging", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], DiffSlider.prototype, "sliderX", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], DiffSlider.prototype, "diffOpacity", void 0);
__decorate([
    tsdi_1.initialize,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiffSlider.prototype, "initialize", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], DiffSlider.prototype, "aspectRatio", null);
__decorate([
    lodash_decorators_1.bind,
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiffSlider.prototype, "handleDragStart", null);
__decorate([
    lodash_decorators_1.bind,
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiffSlider.prototype, "handleDragStop", null);
__decorate([
    lodash_decorators_1.bind,
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiffSlider.prototype, "handleDrag", null);
__decorate([
    lodash_decorators_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiffSlider.prototype, "slide", null);
__decorate([
    lodash_decorators_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLDivElement]),
    __metadata("design:returntype", void 0)
], DiffSlider.prototype, "refContainer", null);
__decorate([
    lodash_decorators_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLImageElement]),
    __metadata("design:returntype", void 0)
], DiffSlider.prototype, "refImageReceived", null);
__decorate([
    lodash_decorators_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLImageElement]),
    __metadata("design:returntype", void 0)
], DiffSlider.prototype, "refImageSnapshot", null);
__decorate([
    lodash_decorators_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLImageElement]),
    __metadata("design:returntype", void 0)
], DiffSlider.prototype, "refImageDiff", null);
__decorate([
    lodash_decorators_1.bind,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiffSlider.prototype, "adjustSizes", null);
__decorate([
    lodash_decorators_1.bind,
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiffSlider.prototype, "handleDiffOpacity", null);
DiffSlider = __decorate([
    tsdi_1.external,
    mobx_react_1.observer
], DiffSlider);
exports.DiffSlider = DiffSlider;
//# sourceMappingURL=diff-slider.js.map