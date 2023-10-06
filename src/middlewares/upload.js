const multer = require("multer");
const fs = require("fs");
const path = require("path");

/** Image upload using disk storage */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "sport_image") {
      fs.mkdirSync(path.join(__dirname, "../public/sport_image"), {
        recursive: true,
      });
      cb(null, path.join(__dirname, "../public/sport_image"));
    }
   else if (file.fieldname == "sport_celebrity_image") {
      fs.mkdirSync(path.join(__dirname, "../public/sport_celebrity_image"), {
        recursive: true,
      });
      cb(null, path.join(__dirname, "../public/sport_celebrity_image"));
    }
   else if (file.fieldname == "student_image") {
      fs.mkdirSync(path.join(__dirname, "../public/student_image"), {
        recursive: true,
      });
      cb(null, path.join(__dirname, "../public/student_image"));
    }
   else if (file.fieldname == "trainer_image") {
      fs.mkdirSync(path.join(__dirname, "../public/trainer_image"), {
        recursive: true,
      });
      cb(null, path.join(__dirname, "../public/trainer_image"));
    }
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      cb("Only .png, .jpg and .jpeg format are allowed!");
    }
    cb(null, new Date().getTime() + ext);
  },
});

const upload = multer({
  storage,
});

module.exports =  upload ;