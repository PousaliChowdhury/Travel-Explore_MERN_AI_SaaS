const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
    }
  ],

  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
    }
  ],
  saveForLater: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package"
    }
  ]
  
});

module.exports = mongoose.model("User", userSchema);
