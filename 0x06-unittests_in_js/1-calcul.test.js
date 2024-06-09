const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber test cases', function() {
  describe('SUM operations', function() {
    it('should return 9 when a = 6 and b = 3', function() {
      assert.equal(calculateNumber('SUM', 6, 3), 9);
    });
    it('should return 6 when a = 5.5 and b = 0', function() {
      assert.equal(calculateNumber('SUM', 5.5, 0), 6);
    });
    it('should return 14 when a = 10.3 and b = 3.8', function() {
      assert.equal(calculateNumber('SUM', 10.3, 3.8), 14);
    });
    it('should return -5 when a = -2.7 and b = -2.2', function() {
      assert.equal(calculateNumber('SUM', -2.7, -2.2), -5);
    });
  });
  describe('SUBTRACT operations', function() {
    it('should return 3 when a = 6 and b = 3', function() {
      assert.equal(calculateNumber('SUBTRACT', 6, 3), 3);
    });
    it('should return 6 when a = 5.5 and b = 0', function() {
      assert.equal(calculateNumber('SUBTRACT', 5.5, 0), 6);
    });
    it('should return 6 when a = 10.3 and b = 3.8', function() {
      assert.equal(calculateNumber('SUBTRACT', 10.3, 3.8), 6);
    });
    it('should return -1 when a = -2.7 and b = -2.2', function() {
      assert.equal(calculateNumber('SUBTRACT', -2.7, -2.2), -1);
    });
  });
  describe('DIVIDE operations', function() {
    it('should return 2 when a = 6 and b = 3', function() {
      assert.equal(calculateNumber('DIVIDE', 6, 3), 2);
    });
    it('should return Error when a = 5.5 and b = 0', function() {
      assert.equal(calculateNumber('DIVIDE', 5.5, 0), 'Error');
    });
    it('should return 2.5 when a = 10.3 and b = 3.8', function() {
      assert.equal(calculateNumber('DIVIDE', 10.3, 3.8), 2.5);
    });
    it('should return 1.5 when a = -2.7 and b = -2.2', function() {
      assert.equal(calculateNumber('DIVIDE', -2.7, -2.2), 1.5);
    });
  });
});
