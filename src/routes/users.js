const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/auth");

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
  await createUser(req, res);
});
router.post("/login", async (req, res) => {
  // await createUser(req, res);
});

module.exports = router;
