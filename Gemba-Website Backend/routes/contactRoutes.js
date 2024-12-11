// routes/contactRoutes.js
// const express = require("express");
// const router = express.Router();
// const contactController = require("../controllers/contactController");

// router.post("/api/contact", contactController.handleContactFormSubmission);

// module.exports = router;


const express = require("express");
const router = express.Router();
const { handleContactFormSubmission } = require("../controllers/contactController");

// Route for handling contact form submission
router.post("/api/contact", handleContactFormSubmission);

module.exports = router;
