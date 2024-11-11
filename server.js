const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Routes = require('./userRoutes')

// Middleware
app.use(express.json());

// Connect to MongoDB
const uri =       "mongodb+srv://ehabe:Madman9905@ehabe1.4ns6y.mongodb.net/?retryWrites=true&w=majority&appName=ehabe1"

const port = 3000;

mongoose.connect(uri)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes

app.use('/', Routes)
app.listen(port,
    () => console.log(`Server running on port ${port}`)
);