const mysql = require("mysql2/promise"); 

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Test@123",
  database: "swift_store",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test the connection
const connectDB = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Connected to MySQL database");
    connection.release(); 
    return true;
  } catch (err) {
    console.error("Error connecting to MySQL:", err.message);
    throw err; 
  }
};

// Export the pool and connect function
module.exports = {
  connectDB,
  pool,
};
