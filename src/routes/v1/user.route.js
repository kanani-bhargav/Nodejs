const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create user */
router.post(
  "/create-user",
  validate(userValidation.createUser),
  userController.createUser
);

/** Get user list */
router.get(
  "/list-user",
  validate(userValidation.getUserList),
  userController.getUserList
);

/** Get user details by id */
router.get(
  "/getuser/:userId",
  validate(userValidation.getDetails),
  userController.getUserDetails
);

/** user details update by id */
router.put(
  "/update-user/:userId",
  validate(userValidation.updateUser),
  userController.updateUser
);

/** Delete user */
router.delete(
  "/delete-user/:userId",
  validate(userValidation.getDetails),
  userController.deleteUser
);

/** Send mail */
router.post(
  "/send-mail",
  validate(userValidation.sendMail),
  userController.sendMail
);

module.exports = router;