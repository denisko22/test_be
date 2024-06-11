const Product = require("../model/Product")
const Comment = require('../model/Comment')
const { response } = require("express")

const getProducts = async (req,res) =>{
    const products = await Product.find().populate('comments');
    res.json(products);
}
const getOneProduct = async (req,res) =>{
    const product = await Product.findById(req.params.id).populate('comments');
    res.json(product);
}
const newProduct = async (req,res) =>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
}
const updateProduct = async (req,res) =>{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
}
const deleteProduct = async (req,res) =>{
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
}

module.exports  = {
    getProducts,
    getOneProduct,
    newProduct,
    updateProduct,
    deleteProduct
}