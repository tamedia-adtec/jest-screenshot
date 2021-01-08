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
exports.FailedTestSection = void 0;
const React = __importStar(require("react"));
const bulma = __importStar(require("bulma"));
const bind_1 = __importDefault(require("classnames/bind"));
const snapshot_1 = require("../snapshot");
const cx = bind_1.default.bind(bulma);
class FailedTestSection extends React.Component {
    get failedTest() { return this.props.failedTest; }
    render() {
        const { titles } = this.failedTest;
        return (React.createElement("section", { className: cx("section") },
            React.createElement("p", { className: cx("subtitle", "is-4") }, this.failedTest.titles.join(" ")),
            this.failedTest.failedSnapshots.map(snapshot => {
                return (React.createElement(snapshot_1.Snapshot, { key: `${snapshot.testName}-${snapshot.snapshotNumber}`, snapshot: snapshot }));
            })));
    }
}
exports.FailedTestSection = FailedTestSection;
//# sourceMappingURL=failed-test-section.js.map