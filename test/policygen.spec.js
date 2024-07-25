"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = __importDefault(require("../src"));
describe("Policygen", () => {
    it("should be able to create a new instance", () => {
        const policygen = new src_1.default({});
        chai_1.assert.instanceOf(policygen, src_1.default);
    });
    it("should render a privacy policy", async () => {
        const policygen = new src_1.default({ debug: false });
        const privacyPolicy = await policygen.privacyPolicy();
        chai_1.assert.isString(privacyPolicy);
        console.log(privacyPolicy);
    });
    it("should render a terms of service", async () => {
        const policygen = new src_1.default({ debug: false });
        const termsOfService = await policygen.termsOfService();
        chai_1.assert.isString(termsOfService);
        console.log(termsOfService);
    });
});
