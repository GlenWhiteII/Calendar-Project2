const express = require("express");
const router = express.Router();
const passport = require("../helpers/passport-config");
const mongoose = require("mongoose");

const User = require("../models/artists");

const addUser = async (email, username, name, password) => {
  const newUser = await User.create({
    name,
    username,
    email,
    password,
  });
  console.log("---- New User! ----", newUser);
  return newUser;
};

const getUser = async (email) => {
  const findUser = await User.findOne({ email: email });
  return findUser;
};

module.exports.addUser = addUser;
module.exports.getUser = getUser;
