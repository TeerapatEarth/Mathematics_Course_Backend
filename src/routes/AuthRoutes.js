const express = require("express");
const router = express.Router();

const AuthController = require("../controller/AuthController");
const auth = require("../middleware/Auth");

router.post("/login", AuthController.login);
router.get("/session", AuthController.session)
router.post("/logout", AuthController.logout)

module.exports = router;
