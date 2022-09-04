const assetService = require('../service/asset.service');

const dummy = (req, res, next) => {
  res.status(200).json({
    message: assetService.dummy()
  })
}

module.exports = {
  dummy
};
