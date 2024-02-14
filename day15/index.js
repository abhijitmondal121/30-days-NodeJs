const express = require('express');
const app = express();
const util = require('util');
const loggingMiddlewarefunction = require('./loggingMiddleware');

app.use(loggingMiddlewarefunction);
app.get('/', (req, res) => {
  res.send('Connected');
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});