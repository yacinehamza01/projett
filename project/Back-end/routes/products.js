const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.get("/get/count", productController.getProductCount);
router.get("/get/featured/:count", productController.getFeaturedProducts);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
