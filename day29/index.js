const express = require('express');
const app = express();
app.get('/example-route', (req, res, next) => {
  next(new AppError('Custom error message', 400));
});
app.get('/another-route', async (req, res, next) => {
  try {
    throw new AppError('Not Found', 404);
  } catch (error) {
    next(error);
  }
});

app.get('/yet-another-route', (req, res, next) => {
  next(new AppError('Internal Server Error', 500));
});
function errorHandler(err, req, res, next) {
  console.error(err);
  if (err instanceof AppError) {
    res.status(err.statusCode || 500).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
app.use(errorHandler);
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});