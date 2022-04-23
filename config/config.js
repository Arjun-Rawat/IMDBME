module.exports = {
  port: 3000,
  mongoose: {
    url: "mongodb://127.0.0.1:27017/IMDb",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
