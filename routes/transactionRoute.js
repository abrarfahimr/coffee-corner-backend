const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transactionController');

router.get('/', transactionController.index)

module.exports = router;