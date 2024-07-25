import { assert } from "chai";

import Policygen from "../src";

describe("Policygen", () => {
  it("should be able to create a new instance", () => {
    const policygen = new Policygen({});

    assert.instanceOf(policygen, Policygen);
  });

  it("should render a privacy policy", async () => {
    const policygen = new Policygen({ debug: false });
    const privacyPolicy = await policygen.privacyPolicy();
    assert.isString(privacyPolicy);

    console.log(privacyPolicy);
  });

  it("should render a terms of service", async () => {
    const policygen = new Policygen({ debug: false });
    const termsOfService = await policygen.termsOfService();
    assert.isString(termsOfService);

    console.log(termsOfService);
  });
});
