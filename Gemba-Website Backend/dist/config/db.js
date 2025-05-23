"use strict";

// config/db.js
var mysql = require("mysql2");
var dotenv = require("dotenv");
dotenv.config();
var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected to SQL database.");
});
module.exports = db;