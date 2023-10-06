const express = require("express");
const validate = require("../../middlewares/validate");
const { subscription_Validation } = require("../../validations");
const { subscription_Controller } = require("../../controllers");
const router = express.Router()

router.post(
    "/create-subscription",
    validate(subscription_Validation.create_subscription),
    subscription_Controller.create_subscription
)

router.put(
    "/update-subscription/:subscriptionId",
    validate(subscription_Validation.create_subscription),
    subscription_Controller.update_subscription
)

router.delete(
    "/delete-subscription/:subscriptionId",
    subscription_Controller.delete_subscription
)

router.get(
    "/list",
    subscription_Controller.get_subscription_list
)



module.exports = router;