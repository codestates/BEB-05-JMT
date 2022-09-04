const express = require('express');
const router = express.Router();
const asset = require('./asset.route');
const user = require('./user.route');

router.use('/asset', asset);
router.use('/user', user);

module.exports = router;
