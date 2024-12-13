// models/contactModel.js
const db = require("../config/db");

const saveContactRequest = (contactData, callback) => {
  const { fullName, email, phoneNumber, company, service_type, request_description, fileName } = contactData;
  
  const sql = "INSERT INTO ContactRequests (fullName, email, phoneNumber, company, service_type, request_description, fileName) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
  db.query(sql, [fullName, email, phoneNumber, company, service_type, request_description, fileName], (err, result) => {
    callback(err, result);
  });
};

module.exports = { saveContactRequest };
