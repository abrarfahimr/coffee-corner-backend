const express = require('express');
const router = express.Router();

const productsController = require("../controllers/productsController");

//get request for all product data
router.get('/', productsController.index);

//get request for single product data
router.get("/:id", productsController.singleProduct);

//post request to add a new product data
router.post('/', productsController.addProduct);

//put request to edit an existing product
router.put("/:id", productsController.updateProduct);

//delete request to delete an existing product
router.delete("/:id", productsController.deleteProduct);

module.exports = router;