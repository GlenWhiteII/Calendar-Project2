// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoDB = require("mongodb");
require("dotenv").config();

// Port
const port = process.env.PORT || 3034;

// Middleware
app.set("view engine", "ejs");
const userRouter = require("./routes/users");
app.use("/", express.static("public"));

// Config
const mongoURI = "mongodb://localhost:27017/Entendre";

// Routes
app.get("/", (req, res) => {
  res.render("signup");
});
app.use("/users", userRouter);
// Models

// App Listen
app.listen(port);
