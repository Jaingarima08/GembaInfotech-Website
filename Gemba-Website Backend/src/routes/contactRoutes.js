const express = require("express");
const { handleContactFormSubmission } = require("../controllers/contactController");

const router = express.Router();

// Route for handling contact form submission
router.post("/api/contact", handleContactFormSubmission);

module.exports = router;
