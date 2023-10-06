const express = require("express");

const { subCategoryValidation } = require("../../validations");
const { subCategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create subCategory */
router.post(
  "/create-subCategory",
  validate(subCategoryValidation.createSubCategory),
  subCategoryController.createSubCategory
);

/** Get subCategory list */
router.get(
  "/list-subCategory",
  validate(subCategoryValidation.getSubCategoryList),
  subCategoryController.getSubCategoryList
);

/** Delete subCategory */
router.delete(
  "/delete-subCategory/:subCategoryId",
  validate(subCategoryValidation.getSubCategoryDetails),
  subCategoryController.deleteSubCategory
);

/**subCategory details update id */
router.put(
  "/update-subCategory/:subCategoryId",
  validate(subCategoryValidation.updateSubCategoryDetails),
  subCategoryController.updateSubCategoryDetails
  )

module.exports = router;
