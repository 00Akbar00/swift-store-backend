const fs = require('fs');
const path = require('path');
const { database } = require('./config/db'); // destructure the database connection

async function runMigrations() {
  const migrationsDir = path.join(__dirname, 'migrations');
  const files = fs.readdirSync(migrationsDir).sort(); // Run in order

  for (const file of files) {
    const filePath = path.join(migrationsDir, file);
    const sql = fs.readFileSync(filePath, 'utf8');
    console.log(`Running migration: ${file}`);

    try {
      await new Promise((resolve, reject) => {
        database.query(sql, (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });
      console.log(`✅ Success: ${file}`);
    } catch (error) {
      console.error(`❌ Failed: ${file}`, error);
      process.exit(1);
    }
  }

  console.log('🎉 All migrations completed.');
  process.exit(0);
}

runMigrations();
