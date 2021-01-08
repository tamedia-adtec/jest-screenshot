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
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
const bulma = __importStar(require("bulma"));
const bind_1 = __importDefault(require("classnames/bind"));
const tsdi_1 = require("tsdi");
const components_1 = require("./components");
const tsdi = new tsdi_1.TSDI();
tsdi.enableComponentScanner();
const cx = bind_1.default.bind(bulma);
ReactDOM.render(React.createElement(React.Fragment, null,
    React.createElement(components_1.Navigation, null),
    React.createElement("div", { className: cx("columns") },
        React.createElement(components_1.Sidebar, null),
        React.createElement(components_1.Main, null))), document.getElementById("root"));
//# sourceMappingURL=index.js.map