const express = require('express');
const router = express.Router();

const productsController = require("../controllers/productsController");

router.get("/", productsController.index);
router.get("/:id", productsController.singleProduct)

module.exports = router;