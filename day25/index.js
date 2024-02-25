const mongoose= require('mongoose');

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/day22', {useNewUrlParser: true, uselinifiedTopology: true }) 
.then(()=> console.log('MongoDB Connected...'))

.catch(err => console.log(err));

// Define the Product schema

const ProductSchema = new mongoose.Schema({

name: String,

price: Number,

quantity: Number
});

// Create the Product model

const Product = mongoose.model('Product', ProductSchema);





async function createProductNameIndex() {

// Create an index on the "name" field of the "Product" collection

try{

await Product.createIndexes({ name: 1 });

console.log('Index created successfully');
}
catch (err) {

console.log('Error in creating index:', err);
}

}
// Call the function to create the index

createProductNameIndex();

