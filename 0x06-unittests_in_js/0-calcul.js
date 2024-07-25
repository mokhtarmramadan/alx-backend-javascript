/**
 * calculateNumber - Should round a, b and return their sum
 * @param: {number} - first number
 * @param: {number} - the second number
 * @returns: {number}
 */
function calculateNumber(a, b) {
  a = Math.round(a);
  b = Math.round(b);
  return a + b
}

module.exports = calculateNumber;
