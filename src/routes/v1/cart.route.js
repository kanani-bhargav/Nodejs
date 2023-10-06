const express = require("express");

const { cartValidation } = require("../../validations");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create cart */
router.post(
  "/create-cart",
  validate(cartValidation.createCart),
  cartController.createCart
);

/** Get cart list */
router.get(
  "/list-cart",
  validate(cartValidation.getCartList),
  cartController.getCartList
);

/** Delete cart */
router.delete(
  "/delete-cart/:cartId",
  validate(cartValidation.getCartDetails),
  cartController.deleteCart
);

/**cart details update id */
router.put(
  "/update-cart/:cartId",
  validate(cartValidation.updateCartDetails),
  cartController.updateCartDetails
  )

module.exports = router;
