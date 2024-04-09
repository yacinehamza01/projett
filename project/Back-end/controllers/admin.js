const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Admin } = require("../models/admin");
const { User } = require("../models/user");
const { Supplier } = require("../models/supplier");

exports.login = async (req, res) => {
  try {
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
      return res.status(400).send("Administrateur non trouvé");
    }
    if (admin && bcrypt.compareSync(req.body.password, admin.passwordHash)) {
      const token = jwt.sign(
        {
          adminId: admin._id,
          isAdmin: true,
        },
        process.env.secret,
        { expiresIn: "1d" }
      );
      res.status(200).send({ admin: admin.email, token: token });
    } else {
      res.status(400).send("Mot de passe incorrect");
    }
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue", error: error });
  }
};

exports.acceptSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    if (!supplier) {
      return res.status(404).json({ message: "Fournisseur non trouvé" });
    }
    // Condition exemple pour registreDeCommerce (condition de substitution)
    if (supplier.registreDeCommerce === "valide") {
      supplier.status = "accepté";
    } else {
      supplier.status = "refusé";
    }
    await supplier.save();
    res
      .status(200)
      .json({ message: "Statut du fournisseur mis à jour avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue", error: error });
  }
};

exports.acceptUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    // Condition exemple pour codeMedical (condition de substitution)
    if (user.codeMedical === "valide") {
      user.status = "accepté";
    } else {
      user.status = "refusé";
    }
    await user.save();
    res
      .status(200)
      .json({ message: "Statut de l'utilisateur mis à jour avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue", error: error });
  }
};

exports.banUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    user.status = "interdit";
    await user.save();
    res.status(200).json({ message: "Utilisateur interdit avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue", error: error });
  }
};
