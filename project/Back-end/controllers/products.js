const { Category } = require("../models/category");
const { Product } = require("../models/product");
const mongoose = require("mongoose");

exports.getProducts = async (req, res) => {
  try {
    let filter = {};
    if (req.query.category) {
      filter = { category: req.query.category.split(",") };
    }

    const productList = await Product.find(filter).populate("category");

    if (!productList) {
      return res.status(500).json({ success: false });
    }

    res.send(productList);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      return res.status(500).json({ success: false });
    }
    res.send(product);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.getProductCount = async (req, res) => {
  try {
    const productCount = await Product.countDocuments();
    if (!productCount) {
      return res.status(500).json({ success: false });
    }
    res.send({ productCount: productCount });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.getFeaturedProducts = async (req, res) => {
  try {
    const count = req.params.count ? req.params.count : 0;
    const products = await Product.find({ isFeatured: true }).limit(+count);
    if (!products) {
      return res.status(500).json({ success: false });
    }
    res.send(products);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.createProduct = async (req, res) => {
  try {
    // Logic for creating product
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    // Logic for updating product
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    // Logic for deleting product
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
