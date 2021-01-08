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
exports.Snapshot = void 0;
const React = __importStar(require("react"));
const bulma = __importStar(require("bulma"));
const ansi_to_react_1 = __importDefault(require("ansi-to-react")); // tslint:disable-line
const bind_1 = __importDefault(require("classnames/bind"));
const level_item_1 = require("../level-item");
const image_diff_viewer_1 = require("../image-diff-viewer");
const css = __importStar(require("./snapshot.scss"));
const cx = bind_1.default.bind(Object.assign(Object.assign({}, bulma), css));
class Snapshot extends React.Component {
    get snapshot() { return this.props.snapshot; }
    render() {
        const { receivedPath, snapshotPath, diffPath, width, height } = this.snapshot;
        return (React.createElement("article", null,
            React.createElement("nav", { className: cx("level") },
                React.createElement(level_item_1.LevelItem, { name: "Total Pixels", value: String(this.snapshot.totalPixels) }),
                React.createElement(level_item_1.LevelItem, { name: "Changed Pixels", value: String(this.snapshot.changedPixels) }),
                React.createElement(level_item_1.LevelItem, { name: "Difference", value: `${(this.snapshot.changedRelative * 100).toFixed(2)}%` })),
            React.createElement("div", { className: cx("message", "test-message") },
                React.createElement("div", { className: cx("message-body") },
                    React.createElement(ansi_to_react_1.default, null, this.snapshot.message))),
            React.createElement(image_diff_viewer_1.ImageDiffViewer, { received: receivedPath, snapshot: snapshotPath, diff: diffPath, width: width, height: height })));
    }
}
exports.Snapshot = Snapshot;
//# sourceMappingURL=snapshot.js.map