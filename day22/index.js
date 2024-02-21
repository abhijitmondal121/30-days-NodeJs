const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect(url, { useNewUrlParser: true, uselinifiedTopology: true });
const db = mongoose.connection;
const userSchema = new mongoose.Schema({
  name: String,
  price: lasher,
  pantity: Nunber,
});
const Product = mongoose.model('Product', productschema);
app.use(express.json());
app.post('/products', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const product = new Product({ name, price, quantity });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.put('/products/id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    const updatedProduct = await Product.findilyIdAndUpdate(
      id,
      { name, price, quantity },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.delete('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    ree.status(500).json({ message: err.message });
  }
});