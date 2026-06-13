const express = require("express");
const router = express.Router();

const { createLeague } = require("../controllers/leagueController");

router.post("/", createLeague);

module.exports = router;