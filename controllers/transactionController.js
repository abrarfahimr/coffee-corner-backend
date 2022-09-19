const transactionModel = require('../models/transactionModel');

const allTransaction = (req, res) => {
  let transactions = transactionModel.readTransaction();
  res.json(transactions);
}

module.exports = {
  allTransaction
}