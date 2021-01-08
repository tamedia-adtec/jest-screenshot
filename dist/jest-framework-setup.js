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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
const Enzyme = __importStar(require("enzyme"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const tsdi_1 = require("tsdi");
Enzyme.configure({ adapter: new enzyme_adapter_react_16_1.default() });
beforeEach(() => {
    global.testResults = {
        files: [
            {
                testFilePath: "src/__tests__/test-first.ts",
                failedTests: [
                    {
                        titles: ["The thing", "with this other thing", "does things"],
                        failedSnapshots: [
                            {
                                testName: "The first snapshots",
                                message: "Received message.",
                                changedRelative: 0.5,
                                totalPixels: 10,
                                changedPixels: 5,
                                testFileName: "src/__tests__/test-first.ts",
                                snapshotNumber: 1,
                                receivedPath: "jest-screenshot-report/reports/some-identifier.snap.png/received.png",
                                diffPath: "jest-screenshot-report/reports/some-identifier.snap.png/diff.png",
                                snapshotPath: "jest-screenshot-report/reports/some-identifier.snap.png/snapshot.png",
                                width: 5,
                                height: 2,
                            },
                            {
                                testName: "The first snapshots",
                                message: "Received message.",
                                changedRelative: 0.2,
                                totalPixels: 100,
                                changedPixels: 20,
                                testFileName: "src/__tests__/test-first.ts",
                                snapshotNumber: 2,
                                receivedPath: "jest-screenshot-report/reports/some-other-identifier.snap.png/received.png",
                                diffPath: "jest-screenshot-report/reports/some-other-identifier.snap.png/diff.png",
                                snapshotPath: "jest-screenshot-report/reports/some-other-identifier.snap.png/snapshot.png",
                                width: 10,
                                height: 10,
                            },
                        ],
                    },
                ],
            },
            {
                testFilePath: "src/__tests__/test-second.ts",
                failedTests: [
                    {
                        titles: ["The second thing", "with this specific behaviour", "does other things"],
                        failedSnapshots: [
                            {
                                testName: "The second snapshots",
                                message: "Received other message.",
                                changedRelative: 0.75,
                                totalPixels: 100,
                                changedPixels: 75,
                                testFileName: "src/__tests__/test-second.ts",
                                snapshotNumber: 1,
                                receivedPath: "jest-screenshot-report/reports/some-third-identifier.snap.png/received.png",
                                diffPath: "jest-screenshot-report/reports/some-third-identifier.snap.png/diff.png",
                                snapshotPath: "jest-screenshot-report/reports/some-third-identifier.snap.png/snapshot.png",
                                width: 5,
                                height: 20,
                            },
                        ],
                    },
                ],
            },
        ],
    },
        global.tsdi = new tsdi_1.TSDI();
    global.tsdi.enableComponentScanner();
});
afterEach(() => {
    global.tsdi.close();
});
//# sourceMappingURL=jest-framework-setup.js.map