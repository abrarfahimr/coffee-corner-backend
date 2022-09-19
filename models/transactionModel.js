const fs = require('fs');

const readTransaction = () => {
  const fileContent = JSON.parse(fs.readFileSync('./data/transactions.json'));
  return fileContent;
}

module.exports= {readTransaction}