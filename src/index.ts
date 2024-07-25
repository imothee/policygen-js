import ejs from "ejs";
import Policygen from "./policygen";

// Types
import type { Configuration } from "./configuration";
import type { TFunction } from "i18next";

class NodePolicygen extends Policygen {
  constructor(params: {
    config?: Configuration;
    debug?: boolean;
    t?: TFunction;
  }) {
    super({ ...params, renderer: ejs.render });
  }
}

export default NodePolicygen;
