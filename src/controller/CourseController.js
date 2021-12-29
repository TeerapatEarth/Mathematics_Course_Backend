const Course = require("../model/Course");
const mongoose = require("mongoose");

let bucket;
mongoose.connection.on("connected", () => {
  var db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "imageBucket",
  });
});

const CourseController = {
  createCourse: async function (req, res, next) {
    try {
      const { title, description, password } = req.body;
      const course = await Course.create({
        title,
        description,
        password,
      });
      res.status(200).json(course);
    } catch (err) {
      console.log(err);
    }
  },
  getAllCourse: async function (req, res, next) {
    try {
      const course = await Course.find({});
      res.status(200).json(course);
    } catch (err) {
      res.status(404).json("Not found.");
    }
  },
  getOneCourse: async function (req, res, next) {
    try {
      const { id } = req.params;
      const course = await Course.findById(id);
      res.status(200).json(course);
    } catch (err) {
      res.status(404).json("Not found course.");
    }
  },
  updateCourse: async function (req, res, next) {
    try {
      const { id } = req.params;
      const { title, description, password } = req.body;
      await Course.findByIdAndUpdate(id, {
        title: title,
        description: description,
        password: password,
      });
      res.status(200).json("Update Course");
    } catch (err) {
      res.status(400).json("Invalid Course ID.");
    }
  },
  deleteCourse: async function (req, res, next) {
    try {
      const { id } = req.params;
      await Course.findByIdAndRemove(id);
      res.status(200).json("Delete Course");
    } catch (err) {
      res.status(400).json("Invalid Course ID.");
    }
  },
  uploadFile: async function (req, res, next) {
    try {
      res.status(200).send("File uploaded successfully");
    } catch (err) {
      console.log(err);
    }
  },
  readFile: async function (req, res, next) {
    try {
      const file = bucket
        .find({
          filename: req.params.filename,
        })
        .toArray((err, files) => {
          if (!files || files.length === 0) {
            return res.status(404).json({
              err: "no files exist",
            });
          }
          bucket.openDownloadStreamByName(req.params.filename).pipe(res);
        });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = CourseController;
