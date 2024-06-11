
const Comment = require('../model/Comment')
const Product = require("../model/Product")

const newComment = async (req,res) =>{
    const newComment = new Comment(req.body);
    await newComment.save();
    const product = await Product.findById(req.body.productId);
    product.comments.push(newComment);
    await product.save();
    res.json(newComment);
}
const deleteComment = async (req,res) =>{
    const comment = await Comment.findByIdAndDelete(req.params.id);
    const product = await Product.findById(comment.productId);
    product.comments.pull(comment);
    await product.save();
    res.json({ message: 'Comment deleted' });
}

module.exports = {
    newComment,
deleteComment
}