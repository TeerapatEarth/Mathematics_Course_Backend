const User = require("../model/User");
const bcrypt = require("bcryptjs");

const AuthController = {
  login: async function (req, res, next) {
    try {
      if (req.session.user) {
        res.status(400).send("User is login");
      }
      const { email, password } = req.body;
      if (!(email, password)) {
        res.status(400).send("All input is required");
      }
      const user = await User.findOne({ email });
      if (user && (await bcrypt.compare(password, user.password))) {
        const sess = req.session;
        sess.user = {
          _id: user._id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          image: user.image,
          role: user.role,
          myCourse: user.myCourse,
        };
        res.status(200).json("Login in " + user.email);
      } else {
        res.status(400).send("Invalid Credentials");
      }
    } catch (err) {
      console.log(err);
    }
  },
  session: async function (req, res, next) {
    try {
      if (!req.session.user) {
        res.status(400).send("Please login");
      } else {
        res.status(200).json(req.session.user);
      }
    } catch (err) {
      console.log(err);
    }
  },
  logout: async function (req, res, next) {
    try {
      req.session.destroy();
      res.status(200).send("Logout");
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = AuthController;
