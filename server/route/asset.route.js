const express = require('express');
const assetController = require('../controllers/asset.controller');
const router = express.Router();

router.get('/character/metadata/:tokenId', assetController.characterMetadata);
router.get('/weapon/metadata/:tokenId', assetController.weaponMeta);

module.exports = router;
