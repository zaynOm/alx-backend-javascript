var assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("Should return 0, when a = 0 and b = 0", function () {
    assert.equal(calculateNumber(0, 0), 0);
  });

  it("Should return 2, when a = 1.6 and b = 0", function () {
    assert.equal(calculateNumber(1.6, 0), 2);
  });

  it("Should return 4, when a = 1 and b = 3", function () {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it("Should return 5, when a = 1 and b = 3.7", function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it("Should return 5, when a = 1.2 and b = 3.7", function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it("Should return 6, when a = 1.5 and b = 3.7", function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it("should return -5 when a = -2.7 and b = -2.2", function () {
    assert.equal(calculateNumber(-2.7, -2.2), -5);
  });

  it("should return -7 when a = -7.7 and b = 1.2", function () {
    assert.equal(calculateNumber(-7.7, 1.2), -7);
  });
});
