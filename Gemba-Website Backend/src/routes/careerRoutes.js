const express = require("express");
const { handleCareerFormSubmission } = require("../controllers/careerController");

const router = express.Router();

router.post("/api/career", handleCareerFormSubmission);

module.exports = router;
