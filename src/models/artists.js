const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  console.log("------- PASSWORD -------", this.password);
  let hash = bcrypt.hashSync(this.password, 12);
  console.log("------- HASH -------", hash);
  this.password = hash;
  next();
});

// create the model and export it
const User = mongoose.model("User", userSchema);

// make this model avaliable for the index file
module.exports = User;
