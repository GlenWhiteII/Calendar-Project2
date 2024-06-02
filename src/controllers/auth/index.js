const express = require("express");
const router = express.Router();
const passport = require("../../helpers/passport-config");
const mongoose = require("mongoose");
const flash = require("connect-flash");

// FLASH
router.use(flash());

router.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

const User = require("../../models/artists");
const { getUser, addUser, verifyUser } = require("../../services");

const createUser = async (req, res) => {
  try {
    const { email, name, username, password } = req.body;
    const findUser = await getUser(email);

    if (!findUser) {
      const newUser = await addUser(email, username, name, password);
      console.log("---- New User! ----", newUser);
      res.redirect("/ui/login");
    } else {
      res.redirect("/ui/signup");
      req.flash("error_msg", "Invalid credentials");
    }
  } catch (error) {
    console.log("Error in Signup post", error);
  }
};

module.exports.createUser = createUser;
