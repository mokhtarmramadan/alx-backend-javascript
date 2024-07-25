const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe("calculateNumber", function () {
  it('(SUM) a, b are positive ints', function () {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
  });

  it('(SUM) a, b are negative ints', function () {
    expect(calculateNumber('SUM', -1, -5)).to.equal(-6);
  });
  
  it('(SUM) a is a positive int and b is a negative int', function () {
    expect(calculateNumber('SUM', 1, -2)).to.equal(-1);
  });

  it('(SUM) a, b are zeros', function () {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });

  it('(SUM) a, b are positive floats (round down)', function () {
    expect(calculateNumber('SUM', 1.3, 2.2)).to.equal(3);
  });
  it('(SUM) a, b are positive floats (round up)', function () {
    expect(calculateNumber('SUM', 1.8, 2.6)).to.equal(5);
  });

  it('(SUM) a, b are negative floats (round down)', function () {
    expect(calculateNumber('SUM', -1.2, -2.1)).to.equal(-3);
  });

  it('(SUM) a, b are negative floats (round up)', function () {
    expect(calculateNumber('SUM', 1.5, 2.7)).to.equal(5);
  });

  it('(SUM) a round up b round down', function () {
    expect(calculateNumber('SUM', 1.7, 5.1)).to.equal(7);
  });

  it('(SUM) a round down b round up', function () {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });


  it('(SUBTRACT) a round down b round up', function () {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });

  it('(SUBTRACT) a round up b round down', function () {
    expect(calculateNumber('SUBTRACT', 5.9, 3.1)).to.equal(3);
  });

  it('(SUBTRACT) a round up b round up', function () {
    expect(calculateNumber('SUBTRACT', 10.5, 3.7)).to.equal(7);
  });

  it('(SUBTRACT) a round down b round down', function () {
    expect(calculateNumber('SUBTRACT', 1.2, 3.1)).to.equal(-2);
  });


  it('(DIVIDE) a round down b round up', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.7)).to.equal(0.2);
  });

  it('(DIVIDE) a round up b round down', function () {
    expect(calculateNumber('DIVIDE', 8.9, 3.1)).to.equal(3);
  });

  it('(DIVIDE) a round up b round up', function () {
    expect(calculateNumber('DIVIDE', 9.5, 4.7)).to.equal(2);
  });

  it('(DIVIDE) a round down b round down', function () {
    expect(calculateNumber('DIVIDE', -6.2, 3.1)).to.equal(-2);
  });

  it('(DIVIDE) division by zero', function () {
    expect(calculateNumber('DIVIDE', -6.2, 0)).to.equal('Error');
  });
});

