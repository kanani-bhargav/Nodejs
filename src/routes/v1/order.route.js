const express = require("express");

const { orderValidation } = require("../../validations");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create order */
router.post(
  "/create-order",
  validate(orderValidation.createOrder),
  orderController.createOrder
);

/** Get order list */
router.get(
  "/list-order",
  validate(orderValidation.getOrderList),
  orderController.getOrderList
);

/** Delete order */
router.delete(
  "/delete-order/:orderId",
  validate(orderValidation.getOrderDetails),
  orderController.deleteOrder
);

/**order details update id */
router.put(
  "/update-order/:orderId",
  validate(orderValidation.updateOrderDetails),
  orderController.updateOrderDetails
  )

module.exports = router;
