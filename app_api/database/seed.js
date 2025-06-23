// app_api/database/seed.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Load environment variables
require('dotenv').config();

// Import models
require("./db");
require("../models/trips");
require("../models/user");

const Trip = mongoose.model("trips");
const User = mongoose.model("User");

// Sample trip data
const sampleTrips = [
  {
    code: "GALR210214",
    name: "Gale Reef",
    length: "4 days / 3 nights",
    start: "2021-02-14",
    resort: "Emerald Bay, 3 stars",
    perPerson: "$1,269.00",
    image: "reef1.jpg",
    description: "Gale Reef is a spectacular diving destination featuring pristine coral formations and abundant marine life. Perfect for both beginner and experienced divers."
  },
  {
    code: "DAWR210315",
    name: "Dawson's Reef",
    length: "4 days / 3 nights", 
    start: "2021-03-15",
    resort: "Blue Lagoon, 4 stars",
    perPerson: "$1,145.00",
    image: "reef2.jpg",
    description: "Explore the underwater wonders of Dawson's Reef with crystal clear waters and diverse marine ecosystems. Includes guided diving tours and equipment."
  },
  {
    code: "CLAR210621",
    name: "Claire's Reef",
    length: "7 days / 6 nights",
    start: "2021-06-21",
    resort: "Coral Paradise, 4 stars", 
    perPerson: "$1,849.00",
    image: "reef3.jpg",
    description: "A week-long adventure at Claire's Reef offers the ultimate diving experience with night dives, wreck exploration, and marine photography workshops."
  },
  {
    code: "TURT210901",
    name: "Turtle Cove",
    length: "5 days / 4 nights",
    start: "2021-09-01", 
    resort: "Seaside Resort, 5 stars",
    perPerson: "$2,199.00",
    image: "kayak.jpg",
    description: "Discover the magic of Turtle Cove where sea turtles nest. Includes kayaking, snorkeling, and guided nature walks through protected marine areas."
  },
  {
    code: "MANT211201",
    name: "Manta Ray Bay",
    length: "6 days / 5 nights",
    start: "2021-12-01",
    resort: "Ocean View Lodge, 4 stars",
    perPerson: "$1,899.00", 
    image: "buffet.jpg",
    description: "Experience close encounters with majestic manta rays in their natural habitat. Package includes boat trips, underwater photography, and luxury accommodations."
  }
];

// Admin user data
const adminUser = {
  username: "admin",
  email: "admin@travlr.com",
  password: "admin123"
};

async function seedDatabase() {
  try {
    console.log("🌱 Starting database seeding...");

    // Clear existing data
    console.log("🗑️  Clearing existing data...");
    await Trip.deleteMany({});
    await User.deleteMany({});

    // Create admin user
    console.log("👤 Creating admin user...");
    const user = new User(adminUser);
    const savedUser = await user.save();
    console.log(`✅ Admin user created: ${savedUser.email}`);

    // Create trips with admin as creator
    console.log("🏝️  Creating sample trips...");
    const tripsWithCreator = sampleTrips.map(trip => ({
      ...trip,
      createdBy: savedUser._id
    }));

    const savedTrips = await Trip.insertMany(tripsWithCreator);
    console.log(`✅ ${savedTrips.length} trips created successfully`);

    // Display summary
    console.log("\n📊 Seeding Summary:");
    console.log("==================");
    console.log(`Users created: 1`);
    console.log(`Trips created: ${savedTrips.length}`);
    console.log("\n🔐 Admin Credentials:");
    console.log("Email: admin@travlr.com");
    console.log("Password: admin123");
    console.log("\n🎉 Database seeding completed successfully!");

  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  } finally {
    // Close database connection
    await mongoose.connection.close();
    console.log("🔌 Database connection closed");
    process.exit(0);
  }
}

// Run seeding
seedDatabase();

