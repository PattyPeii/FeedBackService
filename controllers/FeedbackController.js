// const feedbackService = require("../services/FeedbackService");

const { client } = require('../grpc-client');

function getFeedbackLike(obj) {
  return new Promise((resolve, reject) => client.GetFeedbackLike(obj, (err, response) => {
    if (err) {
      return reject(err)
    }
    resolve(response)        
  }))
}

function getFeedbackComment(obj) {
  return new Promise((resolve, reject) => feedbackClient.GetFeedbackComment(obj, (err, response) => {
    if (err) {
      return reject(err)
    }
    resolve(response)        
  }))
}

exports.getLike = async (req, res) => {
  try {
      const results = await getFeedbackLike({ recipe_id: req })
      console.log(results)
      res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getComment = async (req, res) => {
  try {
    const results = await getFeedbackComment({ recipe_id: req })
    console.log(results)
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

