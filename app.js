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

// Config
const mongoURI = "mongodb://localhost:27017/Entendre";

// Models
