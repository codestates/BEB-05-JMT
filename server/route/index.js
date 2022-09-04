const express = require('express');
const router = express.Router();
const asset = require('./asset.route');

router.use('/asset', asset);

module.exports = router;
