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
exports.FileListEntry = void 0;
const React = __importStar(require("react"));
const bulma = __importStar(require("bulma"));
const bind_1 = __importDefault(require("classnames/bind"));
const tsdi_1 = require("tsdi");
const mobx_react_1 = require("mobx-react");
const mobx_1 = require("mobx");
const store_1 = require("../../../store");
const cx = bind_1.default.bind(bulma);
let FileListEntry = class FileListEntry extends React.Component {
    get file() { return this.props.file; }
    get active() { return this.testFiles.isActive(this.file); }
    handleClick() {
        this.testFiles.selectFile(this.file);
    }
    render() {
        return (React.createElement("li", null,
            React.createElement("a", { className: cx({ "is-active": this.active }), onClick: this.handleClick }, this.file.testFilePath)));
    }
};
__decorate([
    tsdi_1.inject,
    __metadata("design:type", store_1.StoreTestFiles)
], FileListEntry.prototype, "testFiles", void 0);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], FileListEntry.prototype, "file", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], FileListEntry.prototype, "active", null);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FileListEntry.prototype, "handleClick", null);
FileListEntry = __decorate([
    mobx_react_1.observer,
    tsdi_1.external
], FileListEntry);
exports.FileListEntry = FileListEntry;
//# sourceMappingURL=file-list-entry.js.map