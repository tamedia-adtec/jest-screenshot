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
exports.config = void 0;
const path = __importStar(require("path"));
const fs_1 = require("fs");
function getFileConfig() {
    const filePath = path.join(process.cwd(), "jest-screenshot.json");
    if (!fs_1.existsSync(filePath)) {
        return;
    }
    try {
        return JSON.parse(fs_1.readFileSync(filePath, "utf8"));
    }
    catch (err) {
        throw new Error(`Jest: Failed to parse jest-screenshot config at "jest-screenshot.json": ${err.message}`);
    }
}
function getPackageConfig() {
    const packagePath = path.join(process.cwd(), "package.json");
    if (!fs_1.existsSync(packagePath)) {
        return;
    }
    try {
        const packageContent = JSON.parse(fs_1.readFileSync(packagePath, "utf8"));
        return packageContent.jestScreenshot;
    }
    catch (err) {
        throw new Error(`Jest: Failed to parse package.json at "package.json": ${err.message}`);
    }
}
function config(customConfig) {
    const fileConfig = getFileConfig();
    const packageConfig = getPackageConfig();
    const configuration = Object.assign({}, packageConfig, fileConfig, customConfig);
    const { pixelThresholdAbsolute, pixelThresholdRelative } = configuration;
    if (typeof pixelThresholdAbsolute === "undefined" && typeof pixelThresholdRelative === "undefined") {
        configuration.pixelThresholdRelative = 0;
    }
    return configuration;
}
exports.config = config;
//# sourceMappingURL=config.js.map