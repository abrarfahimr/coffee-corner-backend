const productModel = require('../models/productsModel');

const allProducts = (req, res) => {
  let products = productModel.readProducts();
  res.json(products);
};

const productById = (req, res) => {
  let products = productModel.readProducts();
  const productId = products.find((product) => product.id === req.params.id);
  res.json(productId);
};

module.exports = {
  allProducts,
  productById
}