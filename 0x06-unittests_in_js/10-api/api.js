const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("Welcome to the payment system");
});

app.get("/cart/:id([0-9]+)", (req, res) => {
  res.end(`Payment methods for cart ${req.params.id}`);
});

app.get("/available_payments", (req, res) => {
  res.send({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post("/login", (req, res) => {
  res.send(`Welcome ${req.body.username}`);
});

app.listen(7865, () => {
  console.log("API available on localhost port 7865");
});
