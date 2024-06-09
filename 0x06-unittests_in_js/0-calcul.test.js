const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calcul test', function() {
  it('should return 0 when a = 0 and b = 0', function() {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('should return 0 when a = -0.4 and b = 0.2', function() {
    assert.equal(calculateNumber(-0.4, 0.2), 0);
  });
  it('should return 9 when a = 6 and b = 3', function() {
    assert.equal(calculateNumber(6, 3), 9);
  });
  it('should return 6 when a = 5.5 and b = 0', function() {
    assert.equal(calculateNumber(5.5, 0), 6);
  });
  it('should return 14 when a = 10.3 and b = 3.8', function() {
    assert.equal(calculateNumber(10.3, 3.8), 14);
  });
  it('should return -5 when a = -2.7 and b = -2.2', function() {
    assert.equal(calculateNumber(-2.7, -2.2), -5);
  });
  it('should return -7 when a = -7.7 and b = 1.2', function() {
    assert.equal(calculateNumber(-7.7, 1.2), -7);
  });
  it('should return NaN when a = NaN and b = NaN', function() {
    assert.equal(calculateNumber(NaN, NaN), NaN);
  });
  it('should return NaN when a = NaN and b = 5.3', function() {
    assert.equal(calculateNumber(NaN, 5.3), NaN);
  });
  it('should return NaN when a = NaN and b = Infinity', function() {
    assert.equal(calculateNumber(NaN, Infinity), NaN);
  });
  it('should return Infinity when a = Infinity and b = Infinity', function() {
    assert.equal(calculateNumber(Infinity, Infinity), Infinity);
  });
  it('should return Infinity when a = Infinity and b = 4.2', function() {
    assert.equal(calculateNumber(Infinity, 4.2), Infinity);
  });
});
