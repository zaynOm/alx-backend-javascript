var assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  describe("SUM operations", function () {
    it("Should return 2, when a = 1.6 and b = 0", function () {
      assert.equal(calculateNumber("SUM", 1.6, 0), 2);
    });

    it("Should return 4, when a = 1 and b = 3", function () {
      assert.equal(calculateNumber("SUM", 1, 3), 4);
    });

    it("Should return 5, when a = 1.2 and b = 3.7", function () {
      assert.equal(calculateNumber("SUM", 1.2, 3.7), 5);
    });

    it("should return -5 when a = -2.7 and b = -2.2", function () {
      assert.equal(calculateNumber("SUM", -2.7, -2.2), -5);
    });
  });

  describe("SUBTRACT operations", function () {
    it("Should return 2, when a = 1.6 and b = 0", function () {
      assert.equal(calculateNumber("SUBTRACT", 1.6, 0), 2);
    });

    it("Should return -2, when a = 1 and b = 3", function () {
      assert.equal(calculateNumber("SUBTRACT", 1, 3), -2);
    });

    it("Should return 4, when a = 8.2 and b = 3.7", function () {
      assert.equal(calculateNumber("SUBTRACT", 8.2, 3.7), 4);
    });

    it("should return -1 when a = -2.7 and b = -2.2", function () {
      assert.equal(calculateNumber("SUBTRACT", -2.7, -2.2), -1);
    });
  });

  describe("DIVIDE operations", function () {
    it("Should return Error, when a = 1.6 and b = 0", function () {
      assert.equal(calculateNumber("DIVIDE", 1.6, 0), "Error");
    });

    it("Should return 3, when a = 9 and b = 3", function () {
      assert.equal(calculateNumber("DIVIDE", 9, 3), 3);
    });

    it("Should return 2, when a = 8.2 and b = 3.7", function () {
      assert.equal(calculateNumber("DIVIDE", 8.2, 3.7), 2);
    });

    it("should return 1.5 when a = -2.7 and b = -2.2", function () {
      assert.equal(calculateNumber("DIVIDE", -2.7, -2.2), 1.5);
    });
  });
});
