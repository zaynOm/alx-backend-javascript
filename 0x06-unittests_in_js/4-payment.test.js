const expect = require("chai").expect;
const Sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", function () {
  let spy;
  let stub;

  this.beforeEach(() => {
    stub = Sinon.stub(Utils, "calculateNumber");
    stub.returns(10);
    spy = Sinon.spy(console, "log");
  });

  this.afterEach(() => {
    stub.restore();
    spy.restore();
  });

  it('Should call Utils.calculateNumber with "SUM", 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    expect(spy.calledOnceWithExactly("The total is: 10")).to.be.true;
  });
});
