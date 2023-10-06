const express = require("express");
const { ecomController } = require("../../controllers")

const router = express.Router();

router.get(
    "/list-ecom",
    ecomController.getEcomList
)

module.exports = router;