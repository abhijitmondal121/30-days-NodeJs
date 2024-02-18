const url = 'mongodb://localhost:27017/myapp';
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s]+[^\s]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
});
const User = mongoose.model('User', userSchema);
app.use(express.json());
app.post('/users', async (req, res) => {
  try {
    const { username, email } = req.body;
    // Create a new user instance
    const newUser = new User({ username, email });
    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    if ((error.name = 'ValidationError')) {
      // If validation error, send 400 Bad Request with error details
      res.status(400).json({ error: error.message });
    } else {
      // For other errors, send 500 Internal Server Error
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});