const Sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  this.beforeEach(() => {
    spy = Sinon.spy(console, 'log');
  });

  this.afterEach(() => {
    spy.restore();
  });

  it('should call console.log once with "The total is: 120"', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should call console.log once with "The total is: 20"', function() {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
