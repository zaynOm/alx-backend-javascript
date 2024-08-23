const { expect } = require("chai");
const request = require("request");

describe("Index page", function () {
  it("should get status code 200", function (done) {
    request.get("http://localhost:7865/", (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should get "Welcome to the payment system" for GET /', function (done) {
    request.get("http://localhost:7865/", (err, res) => {
      expect(res.body).to.equal("Welcome to the payment system");
      done();
    });
  });
});
