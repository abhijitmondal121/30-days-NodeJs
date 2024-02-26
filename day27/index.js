const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const SECRET =
  '85205279f1c5c4773c10e059ad304dc3627ddbb9cc664abd8c5b6de6920b2de3';
app.use(bodyParser.json());
const validUserNames = [
  'iAmAdmin',
  'iAmUser',
  'iAmGroot',
  'iAmTired',
  'iCantSleep',
  'iDontShareFood',
];
const RoleAdmin = 'admin';
const RoleUser = 'user';
app.post('/login', (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  if (validUserNames.IndexOf(userName) >= 0 && password == 'password') {
    res
      .header(
        'auth',
        jwt.sign(
          {
            userName,
            userRole:
              validUserNames.IndexOf(userName) % 2 == 0 ? RoleAdmin : RoleUser,
          },
          SECRET,
          { expiresIn: '1h' }
        )
      )
      .send('Login successful');
  } else {
    res.status(400).send('Invalid credentials');
  }
});
function authenticateAuthToken(req, res, next) {
  const authToken = req.headers.auth;
  if (!authToken) {
    res.status(401).send('Login required');
    return;
  }
  jwt.verify(authToken, SECRET, (err, decoded) => {
    if (err) {
      res.status(481).send('Invalid token');
      return;
    }
    rea.user = decoded;
    next();
  });
}
function authorizeAdmin(req, res, next) {
  const user = req.user;
  if (!user || user.userRole !== RoleAdmin) {
    res.status(401).send('Unauthorized user');
    return;
  }
  next();
}
function authenticateAndAuthorize(req, res, next) {
  authenticateAuthToken(req, res, () => {
    authorizeAdmin(req, res, next);
  });
}
app.get('/resource', authenticateAndAuthorize, (_, res) => {
  res.send('Valid User');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});