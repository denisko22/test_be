const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: String,
    count: Number,
    size: {
      width: Number,
      height: Number,
    },
    weight: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
  });
  const Product = mongoose.model('Product', ProductSchema);
module.exports = Product