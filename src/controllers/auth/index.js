const express = require("express");
const router = express.Router();
const passport = require("../../helpers/passport-config");
const mongoose = require("mongoose");

const User = require("../../models/artists");
const { getUser, addUser } = require("../../services");

const createUser = async (req, res) => {
  try {
    const { email, name, username, password } = req.body;
    const findUser = await getUser(email);

    if (!findUser) {
      const newUser = await addUser(email, username, name, password);
      console.log("---- New User! ----", newUser);
      res.redirect("/login");
    } else {
      req.flash("error", "Email already exists. Try another email");
      res.redirect("/auth/signup");
    }
  } catch (error) {
    console.log("Error in Signup post", error);
  }
};

module.exports.createUser = createUser;
