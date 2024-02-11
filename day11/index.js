const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config();

function authenticationMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/protected', authenticationMiddleware, (req, res) => {
  res.send('Protected route accessed successfully');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// const secretkey = process.env.SECRET;
// const token = jwt.sign({}, secretkey, { expiresIn: '1h' });
// console.log('Generated token:', token);