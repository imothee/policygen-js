import i18next from "i18next";
import ejs from "ejs";

import { DefaultConfiguration } from "./configuration";
import { Tailwind, Classes } from "./css";

// Locale files
import en from "./locales/en";

// Templates
import privacyPolicyTemplate from "./templates/privacy_policy";
import termsOfServiceTemplate from "./templates/tos";

// Types
import type { Configuration } from "./configuration";
import type { Css } from "./css";
import type { TFunction } from "i18next";

export class Policygen {
  t?: TFunction;
  config: Configuration;
  css: Css;
  debug: boolean = false;

  constructor(params: {
    config?: Configuration;
    debug?: boolean;
    t?: TFunction;
  }) {
    if ("t" in params && params.t) {
      this.t = params.t;
    }
    if ("debug" in params && params.debug !== undefined) {
      this.debug = !!params.debug;
    }
    this.config = DefaultConfiguration;
    if ("config" in params && params.config) {
      this.config = { ...this.config, ...params.config };
    }
    this.css =
      this.config.cssFramework === "tailwind"
        ? Tailwind(this.config)
        : Classes();
  }

  async initI18next() {
    this.t = await i18next.init({
      fallbackLng: "en",
      resources: {
        en,
      },
    });
  }

  async privacyPolicy(): Promise<string> {
    if (!this.t) {
      await this.initI18next();
    }

    return ejs.render(privacyPolicyTemplate, {
      config: this.camelToSnake(this.config),
      css: this.camelToSnake(this.css),
      t: this.t,
      client: typeof window !== "undefined",
    });
  }

  async termsOfService(): Promise<String> {
    if (!this.t) {
      await this.initI18next();
    }

    return ejs.render(termsOfServiceTemplate, {
      config: this.camelToSnake(this.config),
      css: this.camelToSnake(this.css),
      t: this.t,
      client: typeof window !== "undefined",
    });
  }

  private camelToSnake(object: Object): Object {
    return Object.entries(object).reduce((acc, [key, value]) => {
      const newKey = key.replace(
        /([A-Z])/g,
        (match) => `_${match.toLowerCase()}`
      );
      return { ...acc, [newKey]: value };
    }, {});
  }
}

export default Policygen;
