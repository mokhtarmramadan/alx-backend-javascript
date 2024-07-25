const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('a, b are positive ints', function () {
    assert.equal(calculateNumber(1, 2), 3);
  });
  it('a, b are negative ints', function () {
    assert.equal(calculateNumber(-1, -5), -6);
  });

  it('a is a positive int and b is a negative int', function () {
    assert.equal(calculateNumber(1, -2), -1);
  });

  it('a, b are zeros', function () {
    assert.equal(calculateNumber(0, 0), 0);
  });

  it('a, b are positive floats (round down)', function () {
    assert.equal(calculateNumber(1.3, 2.2), 3);
  });
  it('a, b are positive floats (round up)', function () {
    assert.equal(calculateNumber(1.8, 2.6), 5);
  });

  it('a, b are negative floats (round down)', function () {
    assert.equal(calculateNumber(-1.2, -2.1), -3);
  });

  it('a, b are negative floats (round up)', function () {
    assert.equal(calculateNumber(1.5, 2.7), 5);
  });
  
  it('a round up b round down', function () {
    assert.equal(calculateNumber(1.7, 5.1), 7);
  });
  
  it('a round down b round up', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

});
