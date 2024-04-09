const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.getUsers = async (req, res) => {
  try {
    const userList = await User.find();
    if (!userList) {
      return res.status(500).json({ success: false });
    }
    res.send(userList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-passwordHash");
    if (!user) {
      return res.status(404).json({
        message: "L'utilisateur avec l'ID fourni n'a pas été trouvé.",
      });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.registerUser = async (req, res) => {
  let user = new User({
    // Création d'un nouvel objet User
    nom: req.body.nom,
    email: req.body.email,
    passwordHash: bcrypt.hashSync(req.body.password, 10), // Hachage du mot de passe
    téléphone: req.body.téléphone,
    isAdmin: req.body.isAdmin,
    rue: req.body.rue,
    appartement: req.body.appartement,
    codePostal: req.body.codePostal,
    ville: req.body.ville,
    codeMédical: req.body.codeMédical,
  });
  user = await user.save(); // Sauvegarde de l'utilisateur dans la base de données

  if (!user) return res.status(400).send("Impossible de créer l'utilisateur !"); // Envoi d'une réponse d'erreur si la création de l'utilisateur échoue

  res.send(user); // Envoi des données de l'utilisateur créé
};

exports.updateUser = async (req, res) => {
  try {
    // Logic for updating a user
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    // Logic for user login
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // Logic for deleting a user
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.registerNewUser = async (req, res) => {
  try {
    // Logic for registering a new user
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

exports.getCountOfUsers = async (req, res) => {
  try {
    // Logic for getting count of users
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};
