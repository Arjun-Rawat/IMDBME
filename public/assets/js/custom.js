$(() => {
  const BASE = window.location.host;

  //   on upvoting
  $(".vote").on("click", (e) => {
    let movieid = e.target.dataset.movieId;
    $.ajax({
      url: `http://${BASE}/api/v1/movie/up/${movieid}`,
      type: "PUT",
      success: function (res) {
        // console.log(res);
        e.target.firstElementChild.innerText = res.upvotes;
      },
      error: function (err) {
        alert(err.responseJSON.message);
      },
    });
  });

  //   on downvoting

  $(".unvote").on("click", (e) => {
    let movieid = e.target.dataset.movieId;
    $.ajax({
      url: `http://${BASE}/api/v1/movie/down/${movieid}`,
      type: "PUT",
      success: function (res) {
        // console.log(res);
        e.target.firstElementChild.innerText = res.downvotes;
      },
      error: function (err) {
        alert(err.responseJSON.message);
      },
    });
  });
});
