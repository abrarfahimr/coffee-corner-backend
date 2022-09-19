const knex = require('knex')(require('../knexfile'));

//getting data for all products
exports.index = (_req, res) => {
  knex("products")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Products: ${err}`)
    })
};

//getting data for one product
exports.singleProduct = (req, res) => {
  knex("products")
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res
          .status(404)
          .send(`Record with id: ${req.params.id} is not found`);
      }

      // Knex returns an array of records, so we need to send response with a single object only
      res.status(200).json(data[0]);
    })
}

//adding new products
exports.addProduct = (req, res) => {
  console.log(req.body);
  if (
    !req.body.product_name ||
    !req.body.product_id ||
    !req.body.stock ||
    !req.body.price||
    !req.body.sales ||
    !req.body.description ||
    !req.body.roast ||
    !req.body.type ||
    !req.body.body ||
    !req.body.acidity
  ) {
    return res.status(400).send('Please fill all necessary inputs');
  }
  knex("products")
    .insert(req.body)
    .then((data) => {
      const newProductUrl = `/products/${data[0]}`;
      res.status(201).location(newProductUrl).send(newProductUrl);
    })
    .catch((err) => res.status(400).send(`Error creating product: ${err}`));
}

//updating products
exports.updateProduct = (req, res) => {
  knex("products")
    .update(req.body)
    .where({ id: req.params.id })
    .then(() => {
      res
        .status(200)
        .send(`Product with id: ${req.params.id} has been updated`);
    })
    .catch((err) => {
      res.send(400).send(`Error updating products ${req.params.id} ${err}`)
    });
}

//delete products
exports.deleteProduct = (req, res) => {
  knex('products')
    .delete()
    .where({ id: req.params.id })
    .then(() => {
      res
        .status(204)
        .send(`Product with id: ${req.params.id} has been deleted`);
    })
    .catch((err) => {
      res.send(400).send(`Error deleting products ${req.params.id} ${err}`);
  })
}
