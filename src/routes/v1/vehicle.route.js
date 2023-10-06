const express = require("express");
const validate = require("../../middlewares/validate");
const { vehicle_Validation } = require("../../validations");
const { vehicle_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-vehicle",
    validate(vehicle_Validation.create_vehicle),
    vehicle_Controller.create_vehicle
)

router.put(
    "/update-vehicle/:vehicleId",
    validate(vehicle_Validation.create_vehicle),
    vehicle_Controller.update_vehicle
)

router.delete(
    "/delete-vehicle/:vehicleId",
    vehicle_Controller.delete_vehicle
)

router.get(
    "/list",
    vehicle_Controller.get_vehicle_list
)



module.exports = router;