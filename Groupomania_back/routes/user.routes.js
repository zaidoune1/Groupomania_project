const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const userAuth = require("../middleware/auth.middleware");
const uploadAuth = require("../middleware/auth.middleware");
const uploadController = require("../controllers/upload.controller");
const multer = require("multer");
const upload = multer();

//auth
router.post("/register",userAuth.checkUser, authController.signUp);
router.post("/login",userAuth.checkUser, authController.signIn);
router.get("/logout",userAuth.checkUser, authController.logout);

//users
router.get("/", userAuth.checkUser,userController.getAllUsers);
router.get("/:id",userAuth.checkUser, userController.userInfo);
router.put("/:id", userAuth.isUserAuth, userController.updateUser);

//upload
router.post(
  "/upload",
  upload.single("file"),
  uploadAuth.isUploadAuth,
  uploadController.uploadProfil
);

module.exports = router;
