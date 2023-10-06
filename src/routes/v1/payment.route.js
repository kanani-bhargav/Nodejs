const express = require("express");

const { paymentValidation } = require("../../validations");
const { paymentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create payment */
router.post(
  "/create-payment",
  validate(paymentValidation.createPayment),
  paymentController.createPayment
);

/** Get payment list */
router.get(
  "/list-payment",
  validate(paymentValidation.getPaymentList),
  paymentController.getPaymentList
);

/** Delete payment */
router.delete(
  "/delete-payment/:paymentId",
  validate(paymentValidation.getPaymentDetails),
  paymentController.deletePayment
);

/**payment details update id */
router.put(
  "/update-payment/:paymentId",
  validate(paymentValidation.updatePaymentDetails),
  paymentController.updatePaymentDetails
  )

module.exports = router;
