const nodemailer = require("nodemailer");
const path = require("path");

// Function to send email
const sendEmail = async (contactData) => {
  const {
    fullName,
    email,
    phoneNumber,
    company,
    service_type,
    request_description,
    fileName,
  } = contactData;

  // Path to the uploaded file
  const filePath = fileName ? path.join(__dirname, "../../uploads", fileName) : null;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    logger: true, // Log information
    debug: true,  // Enable debugging
  });

  // Prepare the email
  const mailOptions = {
    from: `"${fullName}" <${email}>`,
    to: "company-email@example.com",
    subject: "New Contact Form Submission",
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Service Type: ${service_type}
      Request Description: ${request_description}
    `,
    replyTo: email,
    attachments: filePath
      ? [{ filename: fileName, path: filePath }]
      : [],
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = { sendEmail };
