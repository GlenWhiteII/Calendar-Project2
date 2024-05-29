const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/", (req, res) => {
  res.render("signup");
});
router.get("/listener", (req, res) => {
  res.render("listener");
});
router.get("/artist", (req, res) => {
  res.render("artist");
});
module.exports = router;
