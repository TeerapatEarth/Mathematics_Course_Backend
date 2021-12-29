const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true},
    password: {type: String, default: null},
    first_name: {type: String, default: null},
    last_name:{type: String, default: null},
    role: {type: String, default: "Student"},
    image: {type: String, default: null},
    myCourse: {type: Array, default: []},
    token: {type: String}
})

module.exports = mongoose.model('user', userSchema)