const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserController = {
  createUser: async function (req, res, next) {
    try {
      const { email, password, first_name, last_name } = req.body;
      if (!(email, password, first_name, last_name)) {
        res.status(400).json("All input is required");
      }
      const oldUser = await User.findOne({ email });
      if (oldUser) {
        return res.status(409).send("User already exist. Please login");
      }
      encryptedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        email: email.toLowerCase(),
        password: encryptedPassword,
        first_name,
        last_name,
      });
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  },
  getAllUser: async function (req, res, next) {
    try {
      const allUser = await User.find({});
      res.status(200).json(allUser);
    } catch (err) {
      res.status(404).json("Not found.");
    }
  },
  getOneUser: async function (req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(404).json("Not found user.");
    }
  },
  updateUser: async function (req, res, next) {
    try {
      const { id } = req.params;
      const { first_name, last_name } = req.body;
      await User.findByIdAndUpdate(id, {
        first_name: first_name,
        last_name: last_name,
      });
      res.status(200).json("Update user");
    } catch (err) {
      res.status(400).json("Invalid User ID.");
    }
  },
  deleteUser: async function (req, res, next) {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      res.status(200).json("Delete user");
    } catch (err) {
      res.status(400).json("Invalid User ID.");
    }
  },
};

module.exports = UserController;
