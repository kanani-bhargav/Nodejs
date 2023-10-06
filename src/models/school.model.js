const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
  {
    school_name: {
      type: String,
      trim: true,
    },
    school_id: {
      type: Number,
      default: 1,
    },
    school_location: {
      type: String,
      trim: true,
    },
    school_courses: {
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
  }
);

const School = mongoose.model("school", schoolSchema);
module.exports = School;
