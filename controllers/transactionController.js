const knex = require('knex')(require('../knexfile'));

exports.index = (_req, res) => {
  //getting data for all transactions
  knex('transactions')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Products: ${err}`);
    });
};
