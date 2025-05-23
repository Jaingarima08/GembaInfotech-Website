"use strict";

var express = require("express");
var _require = require("../controllers/contactController"),
  handleContactFormSubmission = _require.handleContactFormSubmission;
var router = express.Router();

// Route for handling contact form submission
router.post("/api/contact", handleContactFormSubmission);
module.exports = router;