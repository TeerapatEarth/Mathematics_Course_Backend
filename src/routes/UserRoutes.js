const express = require("express");
const router = express.Router();

const UserController = require("../controller/UserController")
const middleware = require("../middleware/UserMiddleware")

router.post("/user/create", middleware.single('image'), UserController.createUser)
router.get("/user", UserController.getAllUser)
router.get("/user/:id", UserController.getOneUser)
router.put("/user/update/:id", middleware.single('image'), UserController.updateUser)
router.delete("/user/delete/:id", UserController.deleteUser)

module.exports = router
