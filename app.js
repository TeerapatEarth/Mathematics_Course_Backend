require("dotenv").config();
require("./src/db/database").connect();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: 7200000,
    },
  })
);


const CourseRoutes = require("./src/routes/CourseRoutes");
app.use(CourseRoutes);

const UserRoutes = require("./src/routes/UserRoutes");
app.use(UserRoutes);

const AuthRoutes = require("./src/routes/AuthRoutes");
app.use(AuthRoutes);

module.exports = app;
