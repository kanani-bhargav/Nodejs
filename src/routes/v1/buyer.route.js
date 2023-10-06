const express = require("express");
const validate = require("../../middlewares/validate");
const { buyer_Validation } = require("../../validations");
const { buyer_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-buyer",
    validate(buyer_Validation.create_buyer),
    buyer_Controller.create_buyer
)

router.put(
    "/update-buyer/:buyerId",
    validate(buyer_Validation.create_buyer),
    buyer_Controller.update_buyer
)

router.delete(
    "/delete-buyer/:buyerId",
    buyer_Controller.delete_buyer
)

router.get(
    "/list",
    buyer_Controller.get_buyer_list
)



module.exports = router;