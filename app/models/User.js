const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    default: null,
  },
  verified: {
   type: Boolean,
   default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);