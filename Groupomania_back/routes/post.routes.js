const router = require("express").Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer();
const auth = require("../middleware/auth.middleware");
const postAuth = require("../middleware/auth.middleware");
const uploadAuth = require("../middleware/auth.middleware");
const uploadController = require("../controllers/upload.controller");

//Posts
router.post("/", upload.single("picture"),auth.checkUser, postController.createPost);
router.get("/", auth.checkUser,postController.readPost);
router.put("/:id", postAuth.isPostAuth, postController.updatePost);
router.delete("/:id", postAuth.isPostAuth, postController.deletePost);

//upload
router.post(
    "/upload",
    upload.single("file"),
    uploadController.updatePicture,
  );

//likes/unlikes
router.patch("/like-post/:id",auth.checkUser,postController.likePost);
router.patch("/unlike-post/:id",auth.checkUser, postController.unlikePost);

//Commentaires
router.patch("/comment-post/:id",auth.checkUser, postController.commentPost);
router.put("/comment-edit/:id/:commentId/:text",postAuth.isPostAuth, postController.updateComment);
router.delete("/comment-delete/:id/:commentId", postAuth.isPostAuth,postController.deleteComment);

module.exports = router;
