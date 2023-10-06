const express = require("express");
const validate = require("../../middlewares/validate");
const { supplier_Validation } = require("../../validations");
const { supplier_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-supplier",
    validate(supplier_Validation.create_supplier),
    supplier_Controller.create_supplier
)

router.put(
    "/update-supplier/:supplierId",
    validate(supplier_Validation.create_supplier),
    supplier_Controller.update_supplier
)

router.delete(
    "/delete-supplier/:supplierId",
    supplier_Controller.delete_supplier
)

router.get(
    "/list",
    supplier_Controller.get_supplier_list
)



module.exports = router;