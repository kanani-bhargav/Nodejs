const express = require("express");
const sportRoutes = require("./sport.route");
const sportOpinionRoutes = require("./sportOpinion.route");
const sportStudentRoutes = require("./sportStudent.route");
const sportTestimonialRoutes = require("./sportTestimonial.route");
const sportTrainingRoutes = require("./sportTraining.route");

const router = express.Router();

router.use("/sport", sportRoutes);
router.use("/sportOpinion", sportOpinionRoutes);
router.use("/sportStudent", sportStudentRoutes);
router.use("/sportTestimonial", sportTestimonialRoutes);
router.use("/sportTraining", sportTrainingRoutes);

module.exports = router;