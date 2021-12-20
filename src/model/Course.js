const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {type: String, default: null},
    description: {type: String, default: null},
    password: {type: String, default: null},
    image: {type: String, default: null},
    user: {type: Array, default: []},
    lesson: {type: Array, default: []}
})

module.exports = mongoose.model('course', courseSchema);