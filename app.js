const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const routes = require("./routes/v1");
const { errorConverter, errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const path = require("path");
const moment = require("moment");
const app = express();
app.locals.moment = require("moment");

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use("/api/v1", routes);

const { movieController } = require("./controllers");
app.get("/", movieController.fetchtop10Upvotes);
// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  res.render("404");

  // next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
