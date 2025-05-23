"use strict";

// multerConfig.js
var multer = require("multer");

// Configure file storage for multer
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function filename(req, file, cb) {
    cb(null, "".concat(Date.now(), "-").concat(file.originalname));
  }
});

// Multer middleware
var upload = multer({
  storage: storage,
  fileFilter: function fileFilter(req, file, cb) {
    var allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only .pdf, .doc, and .docx files are allowed!"), false);
    }
  },
  limits: {
    fileSize: 50 * 1024 * 1024
  } // Limit file size to 50 MB
}).single("fileName");
module.exports = upload;