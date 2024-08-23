const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function () {
  describe("SUM operations", function () {
    it("Should return 2, when a = 1.6 and b = 0", function () {
      expect(calculateNumber("SUM", 1.6, 0)).to.equal(2);
    });

    it("Should return 4, when a = 1 and b = 3", function () {
      expect(calculateNumber("SUM", 1, 3)).to.equal(4);
    });

    it("Should return 5, when a = 1.2 and b = 3.7", function () {
      expect(calculateNumber("SUM", 1.2, 3.7)).to.equal(5);
    });

    it("should return -5 when a = -2.7 and b = -2.2", function () {
      expect(calculateNumber("SUM", -2.7, -2.2)).to.equal(-5);
    });
  });

  describe("SUBTRACT operations", function () {
    it("Should return 2, when a = 1.6 and b = 0", function () {
      expect(calculateNumber("SUBTRACT", 1.6, 0)).to.equal(2);
    });

    it("Should return -2, when a = 1 and b = 3", function () {
      expect(calculateNumber("SUBTRACT", 1, 3)).to.equal(-2);
    });

    it("Should return 4, when a = 8.2 and b = 3.7", function () {
      expect(calculateNumber("SUBTRACT", 8.2, 3.7)).to.equal(4);
    });

    it("should return -1 when a = -2.7 and b = -2.2", function () {
      expect(calculateNumber("SUBTRACT", -2.7, -2.2)).to.equal(-1);
    });
  });

  describe("DIVIDE operations", function () {
    it("Should return Error, when a = 1.6 and b = 0", function () {
      expect(calculateNumber("DIVIDE", 1.6, 0)).to.be.equal("Error");
    });

    it("Should return 3, when a = 9 and b = 3", function () {
      expect(calculateNumber("DIVIDE", 9, 3)).to.equal(3);
    });

    it("Should return 2, when a = 8.2 and b = 3.7", function () {
      expect(calculateNumber("DIVIDE", 8.2, 3.7)).to.equal(2);
    });

    it("should return 1.5 when a = -2.7 and b = -2.2", function () {
      expect(calculateNumber("DIVIDE", -2.7, -2.2)).to.be.equal(1.5);
    });
  });
});
