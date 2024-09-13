const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db");
const Student = require("./models/Student"); // Ensure you have the Student model defined

dotenv.config();

// Define the data to be inserted
const seedData = [
  {
    name: "Tanmay",
    age: 21,
    email: "2021bcs068@gmail.com",
  },
  {
    name: "Alice",
    age: 22,
    email: "alice@example.com",
  },
  {
    name: "Bob",
    age: 23,
    email: "bob@example.com",
  },
];

// Function to insert data
const insertData = async () => {
  try {
    await connectDB();
    await Student.insertMany(seedData);
    console.log("Data inserted successfully");
    mongoose.connection.close(); // Close connection after insertion
  } catch (error) {
    console.error("Error inserting data:", error);
    mongoose.connection.close(); // Ensure connection is closed on error
  }
};

insertData();
