const Course = require("../model/Course")

const CourseController = {
    createCourse: async function(req, res, next){
        try {
            const { title, description, password } = req.body
            const course = await Course.create({
                title,
                description,
                password
            })
            res.status(200).json(course)
        } catch (err){
            console.log(err)
        }
    },
    getAllCourse: async function(req, res, next){
        try{
            const course = await Course.find({})
            res.status(200).json(course)
        } catch (err){
            res.status(404).json("Not found.")
        }
    },
    getOneCourse: async function(req, res, next){
        try{
            const { id } = req.params
            const course = await Course.findById(id)
            res.status(200).json(course)
        } catch (err){
            res.status(404).json("Not found course.")
        }
    },
    updateCourse: async function(req, res, next){
        try {
            const { id } = req.params
            const { title, description, password } = req.body
            await Course.findByIdAndUpdate(id, {
                title: title,
                description: description,
                password: password
            })
            res.status(200).json("Update Course")
        } catch (err){
            res.status(400).json("Invalid Course ID")
        }
    },
    deleteCourse: async function(req, res, next){
        try {
            const { id } = req.params
            await Course.findByIdAndRemove(id)
            res.status(200).json("Delete Course")
        } catch (err){
            res.status(400).json("Invalid Course ID")
        }
    }
}

module.exports = CourseController