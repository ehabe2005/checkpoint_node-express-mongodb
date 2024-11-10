const mongoose = require('mongoose')

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ehabe:Madman9905@ehabe1.4ns6y.mongodb.net/?retryWrites=true&w=majority&appName=ehabe1"
    );

    console.log("Connected to MongoDB!");

  } catch (error) {
    console.error("Error during MongoDB connection:", error);
    throw error; 
  }
};

module.exports = { connectToDatabase };