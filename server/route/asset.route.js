const express = require('express');
const assetController = require('../controller/asset.controller');
const router = express.Router();

router.get('/dummy', assetController.dummy);

module.exports = router;
