"use strict";

// server.js
var express = require("express");
var cors = require("cors");
var path = require("path");
var contactRoutes = require("./routes/contactRoutes");
var careerRoutes = require("./routes/careerRoutes");
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Serve uploaded files statically
app.use("/uploads", express["static"](path.join(__dirname, "uploads")));

// Use contact routes
app.use(contactRoutes);

// Use career routes
app.use(careerRoutes);

// Start the server
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});