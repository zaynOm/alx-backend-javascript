function getPaymentTokenFromAPI(success) {
  return success
    ? Promise.resolve({ data: "Successful response from the API" })
    : Promise.resolve();
}

module.exports = getPaymentTokenFromAPI;
