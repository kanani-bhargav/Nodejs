const mongoose = require("mongoose");
const config=require('../config/config')


const sportTestimonialSchema = new mongoose.Schema(
  {
    student_name: {
      type: String,
      trim: true,
    },
    student_academic_year: {
      type: String,
      trim: true,
    },
    student_image: {
      type: String,
      trim: true,
    },
    student_feedback: {
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

const SportTestimonial = mongoose.model(
  "SportTestimonial",
  sportTestimonialSchema
);
module.exports = SportTestimonial;
