const mongoose = require('mongoose')


const CommentSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    description: String,
    date: String,
  });
  const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment