const { movieService } = require("../services");

// create a movie
const createMovie = async (req, res) => {
  let movieData = {
    name: "Spiderman 2",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
    genre: "Action",
    release_date: new Date("2022-05-3"),
    reviews: [
      { title: "this is a fantastic movie", givenBy: "lorem" },
      { title: "fab movie", givenBy: "ipsm" },
      { title: "awsome movie", givenBy: "lorem ipsm" },
    ],
    image: "",
  };
  const result = await movieService.createMovie(movieData);
  res.send(result);
};

// fetch  all movies
const fetchMovie = async (req, res) => {
  const result = await movieService.fetchAll();
  // res.send(result);
  // view part
  res.render("movies", {
    title: "View All Movies",
    movies: result,
  });
  return;
};

// fetch movie by id
const fetchMovieById = async (req, res) => {
  const ID = req.params.id;
  const result = await movieService.fetchById(ID);

  res.render("single_movie", {
    title: "View Movies",
    movie: result,
  });
  // res.send(result);
};

// search movie by genre
const searchAMovie = async (req, res) => {
  let { genre } = req.query;
  genre = genre ? genre : "";
  const result = await movieService.lookForAMovie(genre);
  // res.send(result);
  res.render("search", {
    title: "Search By Gener",
    movies: result,
    search_key : genre
  });
  return;
};

// upvote a move
const upvotes = async (req, res) => {
  const ID = req.params.id;
  const result = await movieService.upvotes(ID);
  res.send(result);
};

// downvote a movie
const downvote = async (req, res) => {
  const ID = req.params.id;
  const result = await movieService.downvote(ID);
  res.send(result);
};

// fetch top 10 upvotes movie
const fetchtop10Upvotes = async (req, res) => {
  const result = await movieService.fetchtop10Upvotes();
  res.render("index", {
    title: "Top 10 Movies",
    movies: result,
  });
  // res.send(result);
};

module.exports = {
  createMovie,
  fetchMovie,
  fetchMovieById,
  searchAMovie,
  fetchtop10Upvotes,
  upvotes,
  downvote,
};
