const commentService = require("../services/CommentService");
const CommentModel = require("../models/CommentModel");
const { client } = require('../grpc-client');

function getgRPCComment(recipe_id) {
  return new Promise((resolve, reject) => client.GetFeedbackComment(recipe_id, (err, response) => {
    if (err) {
      return reject(err)
    }
    resolve(response)        
  }))
}

exports.getComment = async (req, res) => {
  try {
    // const results = await getgRPCComment(req.params.recipe_id)

    const results = await commentService.getAllComment(req.params.recipe_id);
    res.json({ data: results, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postComment = async (req, res) => {
  try {
    const comment = await commentService.postComment(req.body, req.params.recipe_id);
    res.json({message: "comment successfully added", data: {}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const user = await commentService.updateComment(req.params.id, req.body);
    if (user) res.json({ data: user, status: "success" });
    else res.json({status: "fail", message: `id : ${req.params.id} not found` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const user = await commentService.deleteComment(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


