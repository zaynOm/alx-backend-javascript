const Sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function () {
  let spy;

  this.beforeEach(() => {
    spy = Sinon.spy(Utils, "calculateNumber");
  });

  this.afterEach(() => {
    spy.restore();
  });

  it('Should call Utils.calculateNumber with "SUM", 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
  });
});
