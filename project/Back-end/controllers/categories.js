const { Category } = require("../models/category");

exports.getAllCategories = async (req, res) => {
  try {
    const categoryList = await Category.find();
    if (!categoryList) {
      return res.status(500).json({ success: false });
    }
    res.send(categoryList);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "The category with this id does not exist",
      });
    }
    res.send(category);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
      },
      { new: true }
    );
    if (!category) {
      return res.status(400).send("Category cannot be updated");
    }
    res.send(category);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.createCategory = async (req, res) => {
  try {
    let category = new Category({
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
    });
    category = await category.save();
    if (!category) {
      return res.status(400).send("Category cannot be created");
    }
    res.send(category);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (category) {
      return res
        .status(200)
        .json({ success: true, message: "Category has been deleted" });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error });
  }
};
