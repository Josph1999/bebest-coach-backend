const mongoose = require("mongoose");

const PagesSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  title_ka: {
    type: String,
    required: true,
  },
  title_eng: {
    type: String,
    default: null,
  },
  description_ka: {
    type: String,
    required: true,
  },
  description_eng: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Page", PagesSchema);
