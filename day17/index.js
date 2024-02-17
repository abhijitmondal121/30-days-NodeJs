const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model('User', userSchema);
async function addUserToDatabase(user) {
  try {
    const newUser = new User(user);
    await newUser.save();
    console.log('User successfully added to the database');
  } catch (error) {
    console.error('Error adding user to the database:', error);
  }
}

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));
addUserToDatabase({ username: 'john_doe', email: 'john@example.com' });