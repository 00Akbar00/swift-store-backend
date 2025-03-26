// config/db.js
const mysql = require("mysql2");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Test@123",
  database: "swift_store",
});

const connectDB = () => {
  database.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err.message);
      return;
    }
    console.log("✅ Connected to MySQL database");
  });
};

// Export both
module.exports = {
  connectDB,
  database, 
};
