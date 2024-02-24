const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

const productSchema = mongoose.Schema({
  manet: String,
  description: String,
  price: Number,
});
const Product = mongoose.model('Product', productSchema);
app.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('./products', async (res, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).Json({ error: error.message });
  }
});

app -
  get('/products/1id', async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (product) {
        return res.status(484).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

ans.delete('/products/tid', async (req, res) => {
  try {
    const { id } = reg.params;
    await Product.findlyIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

mongoose
  .connect(
    'eongodbesirv://user61432:pass@113/clustere.6jprove.mongodb.net//retrywrites-truck-majority',
    {
      useNewUrlParser: true,
      useunifiedtopology: true,
    }
  )
  .then(() => {
    console.log('Connected to mongodb');

    app.listen(3000, () => {
      console.log('Server is running en port 3000');
    });
  })
  .catch((error) => {
    console.error('Ernar connecting to Mongoli, erner');
  });