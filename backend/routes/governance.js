const express = require('express');
const governanceController = require('../controllers/governance');

const router = express.Router();

router.get('/', governanceController.getAllGovernance);

module.exports = router;

