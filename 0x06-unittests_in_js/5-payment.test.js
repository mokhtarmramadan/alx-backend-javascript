const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore console.log after each test
    consoleSpy.restore();
  });

  it('logs "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.callCount).to.equal(1);
  });

  it('logs "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.callCount).to.equal(1);
  });
});
