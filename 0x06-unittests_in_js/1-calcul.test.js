const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("calculateNumber", function () {
  it('(SUM) a, b are positive ints', function () {
    assert.equal(calculateNumber('SUM', 1, 2), 3);
  });
  it('(SUM) a, b are negative ints', function () {
    assert.equal(calculateNumber('SUM', -1, -5), -6);
  });

  it('(SUM) a is a positive int and b is a negative int', function () {
    assert.equal(calculateNumber('SUM', 1, -2), -1);
  });

  it('(SUM) a, b are zeros', function () {
    assert.equal(calculateNumber('SUM', 0, 0), 0);
  });

  it('(SUM) a, b are positive floats (round down)', function () {
    assert.equal(calculateNumber('SUM', 1.3, 2.2), 3);
  });
  it('(SUM) a, b are positive floats (round up)', function () {
    assert.equal(calculateNumber('SUM', 1.8, 2.6), 5);
  });

  it('(SUM) a, b are negative floats (round down)', function () {
    assert.equal(calculateNumber('SUM', -1.2, -2.1), -3);
  });

  it('(SUM) a, b are negative floats (round up)', function () {
    assert.equal(calculateNumber('SUM', 1.5, 2.7), 5);
  });

  it('(SUM) a round up b round down', function () {
    assert.equal(calculateNumber('SUM', 1.7, 5.1), 7);
  });

  it('(SUM) a round down b round up', function () {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });


  it('(SUBTRACT) a round down b round up', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });

  it('(SUBTRACT) a round up b round down', function () {
    assert.equal(calculateNumber('SUBTRACT', 5.9, 3.1), 3);
  });

  it('(SUBTRACT) a round up b round up', function () {
    assert.equal(calculateNumber('SUBTRACT', 10.5, 3.7), 7);
  });

  it('(SUBTRACT) a round down b round down', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.1), -2);
  });


  it('(DIVIDE) a round down b round up', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.7), 0.2);
  });

  it('(DIVIDE) a round up b round down', function () {
    assert.equal(calculateNumber('DIVIDE', 8.9, 3.1), 3);
  });

  it('(DIVIDE) a round up b round up', function () {
    assert.equal(calculateNumber('DIVIDE', 9.5, 4.7), 2);
  });

  it('(DIVIDE) a round down b round down', function () {
    assert.equal(calculateNumber('DIVIDE', -6.2, 3.1), -2);
  });

  it('(DIVIDE) division by zero', function () {
    assert.equal(calculateNumber('DIVIDE', -6.2, 0), 'Error');
  });
});
