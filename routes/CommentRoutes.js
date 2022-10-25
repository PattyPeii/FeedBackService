const express = require("express");
const {
  getComment,
  postComment,
  updateComment,
  deleteComment,
} = require("../controllers/CommentController");
const router = express.Router();

router.route("/:recipe_id/comments").get(getComment);
router.route("/:recipe_id/comments/create").post(postComment);
router.route("/:recipe_id/comments/:id").put(updateComment).delete(deleteComment);

module.exports = router;
