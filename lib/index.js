"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ejs_1 = __importDefault(require("ejs"));
const policygen_1 = __importDefault(require("./policygen"));
class NodePolicygen extends policygen_1.default {
    constructor(params) {
        super(Object.assign(Object.assign({}, params), { renderer: ejs_1.default.render }));
    }
}
exports.default = NodePolicygen;
