const mongoose = require("mongoose");
const config=require('../config/config')

const sportStudentSchema = new mongoose.Schema(
  {
    student_name: {
      type: String,
      trim: true,
    },
    student_image: {
      type: String,
      trim: true,
    },
    student_academy: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.student_image) {
          data.student_image = `${config.base_url}/student_image/${data.student_image}`;
        }
      },
    },
  }
);

const SportStudent = mongoose.model("SportStudent", sportStudentSchema);
module.exports = SportStudent;
