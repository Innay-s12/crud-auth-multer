const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Product = require('../models/productModel');

exports.tambah = (req, res) => {
    const { name, price, stock } = req.body;
    const newProduct = { name, price, stock };
  
    Product.create(newProduct, (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Product Added' });
    });
  };

exports.getAll = (req, res) => {
  Product.findAll((err, products) => {
    if (err) return res.status(500).json(err);
    res.json(products);
  });
};

exports.getOne = (req, res) => {
  Product.findById(req.params.id, (err, products) => {
    if (err || products.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(products[0]);
  });
};

exports.update = (req, res) => {
  Product.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Product updated' });
  });
};

exports.remove = (req, res) => {
  Product.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Product deleted' });
  });
};