const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transactionController');
//get request for transaction data
router.get('/', transactionController.index)

module.exports = router;