const express = require("express");
const router = express.Router();
const getController = require("../controller/getController");

module.exports = router;

router.get("/home", getController.home);

