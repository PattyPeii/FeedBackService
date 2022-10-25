const express = require("express");
const {
  getComment,
} = require("../controllers/FeedbackController");

const router = express.Router();

router.route("/:id").get(getComment);

module.exports = router;
