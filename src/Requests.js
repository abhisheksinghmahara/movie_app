const Key = 'a831b7388b49ebbd5b650a93be4f8f6e';
const Requests = {
    Popular :`https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`,
    Toprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${Key}&language=en-US&page=1`,
    Trending:`https://api.themoviedb.org/3/trending/all/day?api_key=${Key}&language=en-US`,
    Horror:`https://api.themoviedb.org/3/movie/upcoming?api_key=${Key}&language=en-US`,
    Originals:`https://api.themoviedb.org/3/trending/all/day?api_key=${Key}&language=en-US`,
    Upcoming:`https://api.themoviedb.org/3/movie/now_playing?api_key=${Key}&language=en-US&page=1`,
} 

export default Requests