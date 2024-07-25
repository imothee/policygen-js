"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Policygen = void 0;
const i18next_1 = __importDefault(require("i18next"));
const configuration_1 = require("./configuration");
const css_1 = require("./css");
// Locale files
const en_1 = __importDefault(require("./locales/en"));
// Templates
const privacy_policy_1 = __importDefault(require("./templates/privacy_policy"));
const tos_1 = __importDefault(require("./templates/tos"));
class Policygen {
    constructor(params) {
        this.debug = false;
        if ("t" in params && params.t) {
            this.t = params.t;
        }
        if ("debug" in params && params.debug !== undefined) {
            this.debug = !!params.debug;
        }
        this.config = configuration_1.DefaultConfiguration;
        if ("config" in params && params.config) {
            this.config = Object.assign(Object.assign({}, this.config), params.config);
        }
        this.css =
            this.config.cssFramework === "tailwind"
                ? (0, css_1.Tailwind)(this.config)
                : (0, css_1.Classes)();
        this.renderer = params.renderer;
    }
    initI18next() {
        return __awaiter(this, void 0, void 0, function* () {
            this.t = yield i18next_1.default.init({
                fallbackLng: "en",
                resources: {
                    en: en_1.default,
                },
            });
        });
    }
    privacyPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.t) {
                yield this.initI18next();
            }
            return this.renderer(privacy_policy_1.default, {
                config: this.camelToSnake(this.config),
                css: this.camelToSnake(this.css),
                t: this.t,
            });
        });
    }
    termsOfService() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.t) {
                yield this.initI18next();
            }
            return this.renderer(tos_1.default, {
                config: this.camelToSnake(this.config),
                css: this.camelToSnake(this.css),
                t: this.t,
            });
        });
    }
    camelToSnake(object) {
        return Object.entries(object).reduce((acc, [key, value]) => {
            const newKey = key.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
            return Object.assign(Object.assign({}, acc), { [newKey]: value });
        }, {});
    }
}
exports.Policygen = Policygen;
exports.default = Policygen;
