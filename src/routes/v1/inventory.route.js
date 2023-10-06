const express = require("express");
const validate = require("../../middlewares/validate");
const { inventory_Validation } = require("../../validations");
const { inventory_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-inventory",
    validate(inventory_Validation.create_inventory),
    inventory_Controller.create_inventory
)

router.put(
    "/update-inventory/:inventoryId",
    validate(inventory_Validation.create_inventory),
    inventory_Controller.update_inventory
)

router.delete(
    "/delete-inventory/:inventoryId",
    inventory_Controller.delete_inventory
)

router.get(
    "/list",
    inventory_Controller.get_inventory_list
)



module.exports = router;