const httpStatus = require("http-status");
const { Movie } = require("../models");

const createMovie = async (movie) => {
  return Movie.create(movie);
};
const fetchAll = async () => {
  return await Movie.find({}).select({ name: 1, genre: 1, _id: 1, image: 1,upvotes:1,downvotes:1 });
};
const fetchById = async (id) => {
  return Movie.findById(id).select({ name: 1, genre: 1, _id: 1, details: 1, release_date: 1, reviews: 1,upvotes:1,downvotes:1 });
};

const lookForAMovie = async (genre) => {
  let sort = "release_date";
  return Movie.find({ genre: genre })
    .select({ name: 1, genre: 1, _id: 1, details: 1, release_date: 1, reviews: 1 })
    .sort([[sort, 1]])
    .exec();
};

const upvotes = async (id) => {
  const options = { new: true };

  // await Movie.findOneAndUpdate({ _id: id, downvotes: { $gt: 0 } }, { $inc: { downvotes: -1 } }, { new: true }).exec(); //decrese downvote  while upvoting
  return Movie.findOneAndUpdate({ _id: id, upvotes: { $gte: 0 } }, { $inc: { upvotes: 1 } }, options);
};

const downvote = async (id) => {
  const options = { new: true };

  // await Movie.findOneAndUpdate({ _id: id, upvotes: { $gt: 0 } }, { $inc: { upvotes: -1 } }, { new: true }).exec(); //decrese upvote wile downvating
  return Movie.findOneAndUpdate({ _id: id, downvotes: { $gte: 0 } }, { $inc: { downvotes: 1 } }, options);
};

const fetchtop10Upvotes = async () => {
  return Movie.find({}).sort({ upvotes: -1 }).limit(10);
};

module.exports = {
  createMovie,
  fetchAll,
  fetchById,
  lookForAMovie,
  fetchtop10Upvotes,
  upvotes,
  downvote,
};
