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
exports.DiffSideBySide = void 0;
const React = __importStar(require("react"));
const bulma = __importStar(require("bulma"));
const mobx_react_1 = require("mobx-react");
const mobx_1 = require("mobx");
const bind_1 = __importDefault(require("classnames/bind"));
const lodash_decorators_1 = require("lodash-decorators");
const css = __importStar(require("./diff-side-by-side.scss"));
const cx = bind_1.default.bind(Object.assign(Object.assign({}, bulma), css));
let DiffSideBySide = class DiffSideBySide extends React.Component {
    constructor() {
        super(...arguments);
        this.diffOpacity = 0.5;
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
            React.createElement("div", { className: cx("viewer-container") },
                React.createElement("div", { className: cx("viewer-received") },
                    React.createElement("img", { src: received }),
                    React.createElement("div", { className: cx("viewer-diff") },
                        React.createElement("img", { src: diff, style: { opacity: this.diffOpacity } }))),
                React.createElement("div", { className: cx("viewer-snapshot") },
                    React.createElement("img", { src: snapshot }),
                    React.createElement("div", { className: cx("viewer-diff") },
                        React.createElement("img", { src: diff, style: { opacity: this.diffOpacity } }))))));
    }
};
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], DiffSideBySide.prototype, "diffOpacity", void 0);
__decorate([
    lodash_decorators_1.bind,
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiffSideBySide.prototype, "handleDiffOpacity", null);
DiffSideBySide = __decorate([
    mobx_react_1.observer
], DiffSideBySide);
exports.DiffSideBySide = DiffSideBySide;
//# sourceMappingURL=diff-side-by-side.js.map