const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema(
  {

    feedback_id : String,
    user_id: String,
    recipe_id: String,
    vote: String,
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updateAt"
    }
  }
);

module.exports = mongoose.model("like", feedbackSchema);
