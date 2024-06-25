const mongoose = require('mongoose');

// Define the schema for the product
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,  // Corrected spelling from 'require' to 'required'
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  discountPercentage: {
    type: Number,
    default: 0,  // Default to 0 if no discount is applied
  },
  rating: {
    type: Number,
    default: 0,  // Default to 0 if not rated yet
  },
  stock: {
    type: Number,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  imageSrc: {
    type: String,
  },
});

// Create and export the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
