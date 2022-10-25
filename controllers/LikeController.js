const likeService = require("../services/LikeService");
const { client } = require('../grpc-client');

function getgRPCLike(recipe_id) {
  return new Promise((resolve, reject) => client.GetFeedbackLike(recipe_id, (err, response) => {
    if (err) {
      return reject(err)
    }
    resolve(response)        
  }))
}

exports.getLike = async (req, res) => {
  try {
    const results = await getgRPCLike(req.params.recipe_id)

    // const users = await likeService.getAllLike(req.params.recipe_id);
    res.json({ data: results, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.postLike = async (req, res) => {
  try {
    const like = await likeService.postLike(req.body, req.params.recipe_id);
    res.json({message: "like successfully added", data: {}, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLike = async (req, res) => {
  try {
    const user = await likeService.updateLike(req.params.id, req.body);
    if (user) res.json({ data: user, status: "success" });
    else res.json({status: "fail", message: `id : ${req.params.id} not found` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteLike = async (req, res) => {
  try {
    const user = await likeService.deleteLike(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


