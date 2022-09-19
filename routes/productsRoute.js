const express = require('express');
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.allProducts);
router.get("/:id", productsController.productById)

module.exports = router;