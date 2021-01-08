"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreTestFiles = void 0;
const tsdi_1 = require("tsdi");
const mobx_1 = require("mobx");
let StoreTestFiles = class StoreTestFiles {
    constructor() {
        this.activeFileName = testResults.files.length > 0 ? testResults.files[0].testFilePath : undefined;
    }
    selectFile(file) {
        this.activeFileName = file.testFilePath;
    }
    get activeFile() {
        return testResults.files.find(file => file.testFilePath === this.activeFileName);
    }
    isActive(file) {
        return this.activeFileName === file.testFilePath;
    }
};
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], StoreTestFiles.prototype, "activeFileName", void 0);
__decorate([
    mobx_1.action.bound,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StoreTestFiles.prototype, "selectFile", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], StoreTestFiles.prototype, "activeFile", null);
StoreTestFiles = __decorate([
    tsdi_1.component
], StoreTestFiles);
exports.StoreTestFiles = StoreTestFiles;
//# sourceMappingURL=test-files.js.map