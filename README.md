"# IMDBME" 

<!-- before start -->

<!-- requremets -->
node.js 
mongodb
<!-- requremets -->

RUN npm installs

<!-- endpoints -->
localhost:3000/api/v1/movie  --POST( WILl create a movie) [static data for now]
localhost:3000/api/v1/movie  --GET (get all movie list)
localhost:3000/api/v1/movie/id  --GET (get single movie details)
localhost:3000/api/v1/movie/topupvotes  --GET (get top 10 upvotes movies)
localhost:3000/api/v1/movie/search?genre=drama  --GET (get search reslut by genre)

localhost:3000/api/v1/movie/up/id  --PUT (WILL UPDATE THE upvotes)
localhost:3000/api/v1/movie/up/down  --PUT (WILL UPDATE THE downvotes)


<!-- Till for now it's integrated with frontend as well -->
<!-- so if you want to use via postman and want json as response  then have to comment out send html as respose from the move.controller -->



<!--  -->