import { template as lodashTemplate } from "lodash";
import Policygen from "./policygen";

// Types
import type { Configuration } from "./configuration";
import type { TFunction } from "i18next";

class ClientPolicygen extends Policygen {
  constructor(params: {
    config?: Configuration;
    debug?: boolean;
    t?: TFunction;
  }) {
    const renderer = (template: string, data: object): string => {
      const compiled = lodashTemplate(template);
      return compiled(data);
    };

    super({ ...params, renderer });
  }
}

export default ClientPolicygen;
