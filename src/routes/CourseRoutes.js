const express = require("express");
const router = express.Router();

const CourseController = require("../controller/CourseController")

router.get("/course", CourseController.getAllCourse)

module.exports = router