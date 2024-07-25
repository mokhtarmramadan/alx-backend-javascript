// Define the Utils object
const Utils = {};
function sum(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function divide(a, b) {
  if (b === 0) {
    return "Error";
  }
  return a / b
}

/**
 * calculateNumber - Should round a, b and return a number
 * @param: {number} - first number
 * @param: {number} - the second number
 * @param: {string} - the type of operation
 * @returns: {number}
 */
Utils.calculateNumber = function(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);
  if (type === 'SUM') {
    return sum(a, b);
  } else if (type === 'SUBTRACT') {
    return subtract(a, b);
  } else if (type === 'DIVIDE') {
    return divide(a, b);
  } else {
    return "Error";
  }
}

// Export the Utils module
module.exports = Utils;
