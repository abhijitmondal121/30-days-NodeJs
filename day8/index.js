const express = require('express');
const app = express();

function positiveIntegerHandler(req, res) {
  const number = req.query.number;
  if (isNaN(number) || parseInt(number) <= 0) {
    res.status(400).send('Error: The Number is not a Positive Integer');
  } else {
    res.status(200).send(`Varified: The number ${number} is apositive Integer`);
  }
}

app.use(positiveIntegerHandler);
app.get('/positive');

const port = 1800;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

