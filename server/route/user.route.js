const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.post("/signup", controller.signup);
router.get("/check/:userAddr", controller.check);
router.post("/equip", controller.equip);
router.get("/userinfo", controller.userinfo);

module.exports = router;
