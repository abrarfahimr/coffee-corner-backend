const fs = require('fs');

const readProducts = () => {
  const fileContent = JSON.parse(fs.readFileSync(`./data/products.json`));
  return fileContent;
};

module.exports = {readProducts}