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

describe("Cart page", function () {
  it("should get status code 200 when :id is a number", function (done) {
    request.get("http://localhost:7865/cart/35", (err, res) => {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.equal("Payment methods for cart 35");
      done();
    });
  });

  it("should get status code 404 when :id is not a number", function (done) {
    request.get("http://localhost:7865/cart/NOT-A-NUMBER", (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe("Available payments page", function () {
  it("should get status code 200 with the correct data", function (done) {
    request.get("http://localhost:7865/available_payments", (_, res) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(res.body)).to.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});

describe("Login page", function () {
  it('should get "Welcome Taha" with code 200', function (done) {
    request.post(
      "http://localhost:7865/login",
      { json: { userName: "Taha" } },
      (err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.equal("Welcome Taha");
        done();
      },
    );
  });
});
