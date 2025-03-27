const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀🚀🚀🚀`);
    });
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  });
