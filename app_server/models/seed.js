// app_server/models/seed.js
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Bring in the Trip schema and ensure that it registers with the connection.
// We assume that travlr.js is in the same folder as seed.js.
const Trip = require('./travlr');

// Build the correct path to your trips.json file
const tripsFilePath = path.join(__dirname, '../../data/trips.json');
console.log('Loading trips from:', tripsFilePath);

// Verify that the file exists first
if (!fs.existsSync(tripsFilePath)) {
  console.error(`File not found: ${tripsFilePath}`);
  process.exit(1);
}

let trips;
try {
  trips = JSON.parse(fs.readFileSync(tripsFilePath, 'utf8'));
  console.log(`Successfully loaded ${trips.length} trip records from JSON.`);
} catch (err) {
  console.error('Failed to read or parse trips.json:', err);
  process.exit(1);
}

// Wait for MongoDB connection open event before seeding.
mongoose.connection.once('open', async () => {
  console.log('MongoDB connection is now open. Beginning seeding process...');
  try {
    const deleteResult = await Trip.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} existing Trip records.`);
    
    const insertResult = await Trip.insertMany(trips);
    console.log(`Inserted ${insertResult.length} new Trip records.`);
  } catch (err) {
    console.error('Error during seeding:', err);
  } finally {
    mongoose.connection.close(() => {
      console.log('Database connection closed.');
      process.exit(0);
    });
  }
});

// If mongoose.connection is already open (e.g., from db.js), the seed should run
// Otherwise, ensure your db.js file (or equivalent) is loading and establishing a connection.
// For example, if you haven't already, require your db.js at the top of your main app
// or even here if needed:
// require('../../db');  // Uncomment and adjust if your connection isn't already loaded.
