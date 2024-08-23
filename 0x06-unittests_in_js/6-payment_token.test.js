const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
  it("should return a resolved promise with a Successful response when true is passed", function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({ data: "Successful response from the API" });
        done();
      })
      .catch((err) => done(err));
  });

  it("should return a resolved promise with undefined when false is passed", function (done) {
    getPaymentTokenFromAPI(false)
      .then((res) => {
        expect(res).to.be.undefined;
        done();
      })
      .catch((err) => done(err));
  });
});
