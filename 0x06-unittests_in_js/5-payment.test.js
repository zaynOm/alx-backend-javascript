const expect = require("chai").expect;
const Sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", function () {
  let spy;

  this.beforeEach(() => {
    spy = Sinon.spy(console, "log");
  });

  this.afterEach(() => {
    spy.restore();
  });

  it("Should call sendPaymentRequestToApi with 100 and 20", function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith("The total is: 120")).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it("Should call sendPaymentRequestToApi with 10 and 10", function () {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith("The total is: 20")).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
