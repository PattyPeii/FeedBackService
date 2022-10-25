const Like = require("../models/Like");
const Comment = require("../models/Comment");

exports.geCommentbyRecipeId = async (id) => {
  return await Comment.findById(id);
};

exports.geLikebyRecipeId = async (id) => {
  return await Like.findById(id);
};
