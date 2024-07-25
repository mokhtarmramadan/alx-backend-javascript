const Utils = require('./utils');

/**
 * sendPaymentRequestToApi - calls Utils.calculateNumber
 * @param: {number} totalAmount
 * @param: {number} totalShipping
 * @returns: sum of param1 and param2
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {

  sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sum}`);
}
module.exports = sendPaymentRequestToApi;
