require("dotenv").config();
require("./src/db/database").connect();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const CourseRoutes = require("./src/routes/CourseRoutes");
app.use(CourseRoutes);

module.exports = app;
