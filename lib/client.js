"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const policygen_1 = __importDefault(require("./policygen"));
class ClientPolicygen extends policygen_1.default {
    constructor(params) {
        const renderer = (template, data) => {
            const compiled = (0, lodash_1.template)(template);
            return compiled(data);
        };
        super(Object.assign(Object.assign({}, params), { renderer }));
    }
}
exports.default = ClientPolicygen;
