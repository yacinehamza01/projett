const { Supplier } = require("../models/supplier");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getSuppliers = async (req, res) => {
  try {
    const supplierList = await Supplier.find().select("-passwordHash");
    if (!supplierList) {
      return res.status(500).json({ success: false });
    }
    res.send(supplierList);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id).select(
      "-passwordHash"
    );
    if (!supplier) {
      return res.status(404).json({
        message: "Le fournisseur avec l'ID fourni n'a pas été trouvé.",
      });
    }
    res.status(200).send(supplier);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.registerSupplier = async (req, res) => {
  try {
    // Logic for registering a new supplier
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    // Logic for updating a supplier
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    // Logic for deleting a supplier
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.loginSupplier = async (req, res) => {
  try {
    // Logic for supplier login
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.addNoteAndComment = async (req, res) => {
  try {
    // Logic for adding note and comment
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.getNotesAndComments = async (req, res) => {
  try {
    // Logic for getting notes and comments
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
