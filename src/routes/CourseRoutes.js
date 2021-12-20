const express = require("express");
const router = express.Router();

const CourseController = require("../controller/CourseController")
const middleware = require("../middleware/CourseMiddleware")

router.get("/course", CourseController.getAllCourse)
router.get("/course/:id", CourseController.getOneCourse)
router.post("/course/create", middleware.single("image"), CourseController.createCourse)
router.put("/course/update/:id", middleware.single("image"), CourseController.updateCourse)
router.delete("/course/delete/:id", CourseController.deleteCourse)

module.exports = router