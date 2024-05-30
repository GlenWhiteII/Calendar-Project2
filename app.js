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
app.use("/", express.static("public"));

// Config

// Routes
const routes = require("./routes/users");
app.use("/", routes);
// Models

// MongoDB
mongoose
  .connect("mongodb://localhost:27017/Entendre")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// App Listen
app.listen(port);
