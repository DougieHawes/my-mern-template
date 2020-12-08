const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  posttitle: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post", postSchema);
