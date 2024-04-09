const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const { acceptHelp } = require("../controllers/help");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.registerUser);
router.put("/:id", userController.updateUser);
router.post("/login", userController.loginUser);
router.post("/register", userController.registerNewUser);
router.delete("/:id", userController.deleteUser);
router.get("/get/count", userController.getCountOfUsers);
app.post('/help', userController,acceptHelp) 
module.exports = router;
