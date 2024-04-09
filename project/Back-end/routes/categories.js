const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categories");

router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.put("/:id", categoryController.updateCategory);
router.post("/", categoryController.createCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
