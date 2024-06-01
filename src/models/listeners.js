const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const listenerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verifyPassword: { type: String, required: true },
  },
  { timestamps: true }
);

app.post("/submit", (req, res) => {
  listenerSchema;
});
// create the model and export it
const User = mongoose.model("Listener", listenerSchema);

// make this model avaliable for the index file
module.exports = User;
