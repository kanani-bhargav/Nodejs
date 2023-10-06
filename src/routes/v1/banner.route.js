const express = require("express");
const { bannerController } = require("../../controllers");
const { bannerValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload");
const auth=require("../../middlewares/auth");

const router = express.Router();

router.post(
  "/create-banner",
  upload.single("banner_image"),
  auth(),
  validate(bannerValidation.createBanner),
  bannerController.createBanner
);
// router.get("/list-banner", bannerController.getBannerList);
// router.delete("/delete-banner/:bannerId", bannerController.deleteBanner);
// router.put("/update-banner/:bannerId", bannerController.updateBanner);

module.exports = router;
