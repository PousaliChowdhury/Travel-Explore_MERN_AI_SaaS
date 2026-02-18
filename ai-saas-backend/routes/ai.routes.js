const express = require("express");
const router = express.Router();
const { travelAI } = require("../controllers/ai.controllers");

router.post("/travel", travelAI);

module.exports = router;
