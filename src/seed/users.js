const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { createUser } = require("../controllers");
// Import the Model
const User = require("../models/artists");

router.get("/login", (req, res) => {
  res.render("auth/login");
});
router.get("/signup", (req, res) => {
  res.render("auth/signup");
});
router.get("/listener", (req, res) => {
  res.render("listener");
});
router.get("/artist", (req, res) => {
  res.render("artist");
});
router.post("/signup", async (req, res) => {
  const { email, name, username, password } = req.body;
  console.log(req.body);
  console.log(email);
  await createUser(email, name, username, password);
});
module.exports = router;

// Connecting to DB
mongoose
  .connect("mongodb://localhost:27017/Entendre", {})
  .then(() => {
    console.log("Connected to MongoDB");
    User.create({
      name: "Glen White",
      username: "glen2white",
      email: "glen2white@live.com",
      password: "fishinfun",
    })
      .then((user) => {
        console.log("---- New User ----");
      })
      .catch((error) => {
        console.log("Issue creating user");
      });
  })
  .catch((err) => {
    console.error("Connection error", err);
  });
