const express = require('express');
const { connectToDatabase } = require("./database");
const mongoose = require('mongoose')
const app = express();
const registerRoutes = require('./routes');

registerRoutes(app);

const startServer = async () => {
  try {
  
    await connectToDatabase();
    console.log("Connected to MongoDB!");

    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  }
};

startServer();
