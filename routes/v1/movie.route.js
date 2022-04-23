const express = require("express");
const { movieController } = require("../../controllers");

const router = express.Router();

// search for a movie
router.get("/search", movieController.searchAMovie);
router.get("/topupvotes", movieController.fetchtop10Upvotes);
// fetch movie by id
router.get("/:id", movieController.fetchMovieById);
// fetch all movies
router.get("/", movieController.fetchMovie);


// create a movie
router.post("/", movieController.createMovie);

router.put("/up/:id", movieController.upvotes);
router.put("/down/:id", movieController.downvote);

module.exports = router;
