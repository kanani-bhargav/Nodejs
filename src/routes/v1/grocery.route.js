const express = require("express");
const { groceryValidation } = require("../../validations");
const { groceryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create grocery */
router.post(
  "/create-grocery",
  validate(groceryValidation.createGrocery),
  groceryController.createGrocery
);

/** Get grocery list */
router.get(
  "/list-grocery",
  validate(groceryValidation.getGroceryList),
  groceryController.getGroceryList
);

/** Delete grocery */
router.delete(
  "/delete-grocery/:groceryId",
  validate(groceryValidation.getGroceryDetails),
  groceryController.deleteGrocery
);

/**grocery details update id */
router.put(
  "/update-grocery/:groceryId",
  validate(groceryValidation.updateGroceryDetails),
  groceryController.updateGroceryDetails
  )

module.exports = router;
