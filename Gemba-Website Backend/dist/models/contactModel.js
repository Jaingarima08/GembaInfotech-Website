"use strict";

// models/contactModel.js
var db = require("../config/db");
var saveContactRequest = function saveContactRequest(contactData, callback) {
  var fullName = contactData.fullName,
    email = contactData.email,
    phoneNumber = contactData.phoneNumber,
    company = contactData.company,
    service_type = contactData.service_type,
    request_description = contactData.request_description,
    fileName = contactData.fileName;
  var sql = "INSERT INTO ContactRequests (fullName, email, phoneNumber, company, service_type, request_description, fileName) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [fullName, email, phoneNumber, company, service_type, request_description, fileName], function (err, result) {
    callback(err, result);
  });
};
module.exports = {
  saveContactRequest: saveContactRequest
};