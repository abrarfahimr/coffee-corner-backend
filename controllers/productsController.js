const knex = require('knex')(require('../knexfile'));

exports.index = (_req, res) => {
  knex("products")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving Products: ${err}`)
    })
};

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

