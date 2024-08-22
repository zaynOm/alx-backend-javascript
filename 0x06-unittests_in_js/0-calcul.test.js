var assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
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
});
