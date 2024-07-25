var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import i18next from "i18next";
import ejs from "ejs";
import { DefaultConfiguration } from "./configuration";
import { Tailwind, Classes } from "./css";
// Locale files
import en from "./locales/en";
// Templates
import privacyPolicyTemplate from "./templates/privacy_policy";
import termsOfServiceTemplate from "./templates/tos";
export class Policygen {
    constructor(params) {
        this.debug = false;
        if ("t" in params && params.t) {
            this.t = params.t;
        }
        if ("debug" in params && params.debug !== undefined) {
            this.debug = !!params.debug;
        }
        this.config = DefaultConfiguration;
        if ("config" in params && params.config) {
            this.config = Object.assign(Object.assign({}, this.config), params.config);
        }
        this.css =
            this.config.cssFramework === "tailwind"
                ? Tailwind(this.config)
                : Classes();
    }
    initI18next() {
        return __awaiter(this, void 0, void 0, function* () {
            this.t = yield i18next.init({
                fallbackLng: "en",
                resources: {
                    en,
                },
            });
        });
    }
    privacyPolicy() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.t) {
                yield this.initI18next();
            }
            return ejs.render(privacyPolicyTemplate, {
                config: this.camelToSnake(this.config),
                css: this.camelToSnake(this.css),
                t: this.t,
                client: typeof window !== "undefined",
            });
        });
    }
    termsOfService() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.t) {
                yield this.initI18next();
            }
            return ejs.render(termsOfServiceTemplate, {
                config: this.camelToSnake(this.config),
                css: this.camelToSnake(this.css),
                t: this.t,
                client: typeof window !== "undefined",
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
export default Policygen;
