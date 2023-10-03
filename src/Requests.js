const key = "a001fa8b523a2517046cb7d16a618a74";

const requests = {
  requestPopular: 'https://api.themoviedb.org/3/movie/popular?api_key={key}&language=en-US&page=1',
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
