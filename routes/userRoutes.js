const express = require("express");
const {
  loginController,
  // registerController,
  userAuthController,
  // getAllUsersController,
  selfDataAccToTheirId,
  uploadProfilePic,
  changePassword,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
// router.post("/register", registerController);

// Auth || POST
router.post("/getUser", authMiddleware, userAuthController);

//GET METHOD || USERS
router.post("/selfDataAccToTheirId", selfDataAccToTheirId);

router.post("/uploadProfilePic", uploadProfilePic);

router.patch("/changePassword",changePassword);

//GET METHOD || USERS
// router.get("/getAllUsers", getAllUsersController);

module.exports = router;
