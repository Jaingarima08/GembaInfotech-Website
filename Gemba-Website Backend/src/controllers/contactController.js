const contactModel = require("../models/contactModel");
const { sendEmail } = require("./mailController");
const upload = require("../config/multerConfig"); // Import Multer configuration
const multer = require("multer");

// Handle the form submission
const handleContactFormSubmission = (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ message: "File size exceeds the 50MB limit" });
      }
      return res.status(400).json({ message: `Multer error: ${err.message}` });
    } else if (err) {
      return res.status(400).json({ message: `Error: ${err.message}` });
    }

    const { fullName, email, phoneNumber, company, service_type, request_description } = req.body;
    const fileName = req.file ? req.file.filename : null;

    // Validate required fields
    if (!fullName || !email || !service_type || !request_description) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const contactData = {
      fullName,
      email,
      phoneNumber,
      company,
      service_type,
      request_description,
      fileName,
    };

    contactModel.saveContactRequest(contactData, async (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to save data" });
      }

      try {
        await sendEmail(contactData);
        res.status(200).json({
          message: "Form submitted and email sent successfully!",
        });
      } catch (error) {
        res.status(500).json({ message: "Failed to send email" });
      }
    });
  });
};

module.exports = { handleContactFormSubmission };
