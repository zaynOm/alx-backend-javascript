const Utils = {
  calculateNumber(type, a, b) {
    switch (type) {
      case 'SUM':
        return Math.round(a) + Math.round(b);
      case 'SUBTRACT':
        return Math.round(a) - Math.round(b);
      case 'DIVIDE':
        return !Math.round(b) ? 'Error' : Math.round(a) / Math.round(b);
      default:
        break;
    }
  },
};

module.exports = Utils;
