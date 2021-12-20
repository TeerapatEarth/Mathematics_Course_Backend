require("dotenv").config();
require("./src/db/database").connect();
const express = require("express");
const app = express();
app.use(express.json());

const CourseRoutes = require("./src/routes/CourseRoutes")
app.use(CourseRoutes)

module.exports = app;