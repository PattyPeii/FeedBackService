const express = require("express");
const {
  getLike,
} = require("../controllers/FeedbackController");

const router = express.Router();

router.route("/:id").get(getLike);

module.exports = router;
