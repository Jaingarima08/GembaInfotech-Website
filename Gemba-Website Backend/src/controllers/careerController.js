const { saveCareerRequest } = require("../models/careerModel");
const { sendEmail } = require("./careerMailController");
const upload = require("../config/multerConfig"); // Import Multer configuration
const multer = require("multer");

const handleCareerFormSubmission = (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ message: "File size exceeds the 50MB limit" });
      }
      return res.status(400).json({ message: `Multer error: ${err.message}` });
    } else if (err) {
      return res.status(400).json({ message: `Error: ${err.message}` });
    }

    // console.log("req.body:", req.body);
    // console.log("req.file:", req.file);

  const { fullName, company, email, phoneNumber, message } = req.body;
  const fileName = req.file ? req.file.filename : null;

  if (!fullName || !email || !message || !fileName) {
    return res.status(400).json({ message: "Required fields are missing" });
  }

  const careerData = {
    fullName,
    company,
    email,
    phoneNumber,
    message,
    fileName,
  };

  saveCareerRequest(careerData, async (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to save data" });
    }

    try {
      await sendEmail(careerData);
      res.status(200).json({
        message: "Form submitted and email sent successfully!",
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email" });
    }
  });
});
};

module.exports = { handleCareerFormSubmission };
