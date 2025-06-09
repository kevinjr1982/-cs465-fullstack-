// seed.js

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Adjust the require path to your Trip model.
// For example, if your model is located in app_server/models/travlr.js:
const Trip = require('../app_server/models/travlr');

// Ensure your database connection is established.
// Adjust this path depending on where your db connection file lives.
// For instance, if your connection file is in app_server/models/db.js:
require('../app_server/models/db');

// Build the path to your seed data, for example, a JSON file in the data folder.
const dataPath = path.join(__dirname, '..', 'data', 'trips.json');

async function seedDatabase() {
  try {
    // Read and parse seed data from the JSON file.
    const data = fs.readFileSync(dataPath, 'utf8');
    const trips = JSON.parse(data);
    console.log(`Loaded ${trips.length} trips from JSON file.`);

    // Delete all existing documents in the trips collection.
    await Trip.deleteMany({}).exec();
    console.log('Existing trips removed.');

    // Insert the seed data into the collection.
    const insertedTrips = await Trip.insertMany(trips);
    console.log(`Successfully inserted ${insertedTrips.length} trips.`);
  } catch (err) {
    console.error('Error during the seeding process:', err);
    process.exit(1);
  } finally {
    // Disconnect from the database and exit the process.
    await mongoose.disconnect();
    console.log('Database connection closed. Seeding complete.');
    process.exit(0);
  }
}

seedDatabase();
