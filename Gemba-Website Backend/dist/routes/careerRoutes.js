"use strict";

var express = require("express");
var _require = require("../controllers/careerController"),
  handleCareerFormSubmission = _require.handleCareerFormSubmission;
var router = express.Router();
router.post("/api/career", handleCareerFormSubmission);
module.exports = router;