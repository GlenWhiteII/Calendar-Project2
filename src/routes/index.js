const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/auth");

// UI ROUTES
router.get("/ui/login", (req, res) => {
  res.render("auth/login");
});
router.get("/ui/signup", (req, res) => {
  res.render("auth/signup");
});
router.get("/ui/listener", (req, res) => {
  res.render("listener");
});
router.get("/ui/artist", (req, res) => {
  res.render("artist");
});
router.get("/", (req, res) => {
  res.render("home");
});
// POST ROUTES
router.post("/signup", async (req, res) => {
  await createUser(req, res);
});
router.post("/login", async (req, res) => {
  console.log(req.body);
});

// GET ROUTES

// PUT ROUTES

// DELETE ROUTES

module.exports = router;
