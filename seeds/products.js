//import seed data files, arrays of objects
const productData = require('../seed_data/products.json');
const transactionData = require('../seed_data/transactions.json')

exports.seed = async function(knex) {
  return knex('products')
    .del()
    .then(function () {
      return knex('products').insert(productData);
    })
      .then(() => {
        return knex('transactions').del();
      })
      .then(() => {
        return knex('transactions').insert(transactionData);
      });
};
