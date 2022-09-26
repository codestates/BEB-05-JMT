const express = require('express');
const assetController = require('../controllers/asset.controller');
const router = express.Router();

router.get('/character/metadata/:tokenId', assetController.characterMetadata);

module.exports = router;
