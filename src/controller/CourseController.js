const Course = require("../model/Course")

const CourseController = {
    getAllCourse: async function(req, res, next){
        try{
            const course = await Course.find({})
            res.status(200).json(course)
        } catch (err){
            res.status(404).json("Not found")
        }
    }
}

module.exports = CourseController