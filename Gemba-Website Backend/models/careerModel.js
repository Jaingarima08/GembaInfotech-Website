const db = require("../config/db"); // Database connection

const saveCareerRequest = async (careerData, callback) => {
  const { fullName, company, email, phoneNumber, message, fileName } = careerData;

  const sql = "INSERT INTO CareerRequests (fullName, company, email, phoneNumber, message, fileName) VALUES (?, ?, ?, ?, ?, ?)";

   db.query(sql, [fullName, company, email, phoneNumber, message, fileName], (err, result) => {
    callback(err, result);
   });
};

module.exports = { saveCareerRequest };

