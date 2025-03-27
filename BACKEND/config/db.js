const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use environment variable for connection string
    const conn = await mongoose.connect(process.env.MONGOURL);

    console.log(`DATABASE CONNECTED 😘😘😘`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
