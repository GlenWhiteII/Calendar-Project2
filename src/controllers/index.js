const express = require("express");
const router = express.Router();
const passport = require("../helpers/passport-config");
const mongoose = require("mongoose");

const User = require("../models/artists");

const createUser = async (email, name, username, password) => {
  try {
    console.log("Email", email);
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      const newUser = await User.create({
        name: name,
        username: username,
        email: email,
        password: password,
      });
      console.log("---- New User! ----", newUser);
    } else {
      req.flash("error", "Email already exists. Try another email");
      res.redirect("/auth/signup");
    }
  } catch (error) {
    console.log("Error in Signup post", error);
  }
};

module.exports.createUser = createUser;
