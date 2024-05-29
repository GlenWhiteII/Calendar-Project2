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
const mongoURI = "mongodb://localhost:27017/Entendre";

// Routes
const routes = require("./routes/users");
app.use("/", routes);
// Models

// App Listen
app.listen(port);
