const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const mongoDBConnectionString = process.env.MONGODB_URI;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoDBConnectionString);
    console.log('Successfully connected to MongoDB!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

app.get('/', async (req, res) => {
  const message = 'Welcome MongoDB!';
  res.send(message);
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});