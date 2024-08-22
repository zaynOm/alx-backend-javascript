const Sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");
const { expect } = require("chai");

describe("sendPaymentRequestToApi", function () {
  it('Should call Utils.calculateNumber with "SUM", 100 and 20', function () {
    const spy = Sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    spy.restore();
  });
});
