const express = require("express");
const { musicValidation } = require("../../validations");
const { musicController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create music */
router.post(
  "/create-music",
  validate(musicValidation.createMusic),
  musicController.createMusic
);

/** Get music list */
router.get(
  "/list-music",
  validate(musicValidation.getMusicList),
  musicController.getMusicList
);

/** Delete music */
router.delete(
  "/delete-music/:musicId",
  validate(musicValidation.getMusicDetails),
  musicController.deleteMusic
);

/**music details update id */
router.put(
  "/update-music/:musicId",
  validate(musicValidation.updateMusicDetails),
  musicController.updateMusicDetails
  )

module.exports = router;
