const express = require("express");
const {
  getLike,
} = require("../controllers/LikeController");

const router = express.Router();

router.route("/:recipe_id/likes").get(getLike);

module.exports = router;
