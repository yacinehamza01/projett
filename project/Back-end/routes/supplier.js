const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplier");

router.get("/", supplierController.getSuppliers);
router.get("/:id", supplierController.getSupplierById);
router.post("/", supplierController.registerSupplier);
router.put("/:id", supplierController.updateSupplier);
router.delete("/:id", supplierController.deleteSupplier);
router.post("/login", supplierController.loginSupplier);
router.post("/:id/note", supplierController.addNoteAndComment);
router.get("/:id/notes-commentaires", supplierController.getNotesAndComments);

module.exports = router;
