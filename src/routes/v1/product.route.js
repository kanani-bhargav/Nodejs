const express = require("express");

const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create product */
router.post(
  "/create-product",
  validate(productValidation.createProduct),
  productController.createProduct
);

/** Get product list */
router.get(
  "/list-product",
  validate(productValidation.getProductList),
  productController.getProductList
);

/** Get product details by id */
router.get(
  "/record-product/:productId",
//   validate(productValidation.getProductList),
  productController.getProductDetails
);

/** Delete product */
router.delete(
  "/delete-product/:productId",
  validate(productValidation.getProductDetails),
  productController.deleteProduct
);

/**product details update id */
router.put(
  "/update-product/:productId",
  validate(productValidation.updateProductDetails),
  productController.updateProductDetails
  )

module.exports = router;
