const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    release_date: {
      type: Date,
      required: true,
      trim: true,
    },
    reviews: {
      type: Array,
      default: [],
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    downvotes: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Movie", userSchema);

module.exports = User;
