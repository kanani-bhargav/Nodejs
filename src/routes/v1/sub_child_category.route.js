const express = require("express");

const { subChildCategoryValidation } = require("../../validations");
const { subChildCategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create subChildCategory */
router.post(
  "/create-subChildCategory",
  validate(subChildCategoryValidation.createSubChildCategory),
  subChildCategoryController.createSubChildCategory
);

/** Get subChildCategory list */
router.get(
  "/list-subChildCategory",
  validate(subChildCategoryValidation.getSubChildCategoryList),
  subChildCategoryController.getSubChildCategoryList
);

/** Delete subChildCategory */
router.delete(
  "/delete-subChildCategory/:subChildCategoryId",
  validate(subChildCategoryValidation.getSubChildCategoryDetails),
  subChildCategoryController.deleteSubChildCategory
);

/**subChildCategory details update id */
router.put(
  "/update-subChildCategory/:subChildCategoryId",
  validate(subChildCategoryValidation.updateSubChildCategoryDetails),
  subChildCategoryController.updateSubChildCategoryDetails
  )

module.exports = router;
