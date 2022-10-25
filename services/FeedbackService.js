const FeedbackModel = require("../models/Comment");

exports.getAllFeedbacks = async () => {
  return await FeedbackModel.find();
};

exports.createFeedback = async (feedback) => {
  return await FeedbackModel.create(feedback);
};

exports.getFeedbackById = async (id) => {
  return await FeedbackModel.findById(id);
};

exports.updateFeedback = async (id, feedback) => {
  return await FeedbackModel.findByIdAndUpdate(id, feedback);
};

exports.deleteFeedback = async (id) => {
  return await FeedbackModel.findByIdAndDelete(id);
};
