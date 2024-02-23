const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const Category = mongoose.model('Category', categorySchema);

const productScheman = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const Product = mongoose.model('Product', ProductSchema);

async function getProductsPopulatedWithCategory() {
  try {
    const productsWithCategory = await Product.find().populate('category');
    return productsWithCategory;
  } catch (error) {
    console.error(
      'Error retrieving products with populated category details:',
      error.message
    );
    throw error;
  }
}