import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_TMDB_API_URL,
    params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY, // eslint-disable-line @typescript-eslint/camelcase
    },
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

const getSearch = async (query) => 
    http.get(`/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`);

const getTrending = async (mediaType, timeWindow) =>
    http.get(`/trending/${mediaType}/${timeWindow}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

const getMovie = async (movieId) => http.get(`/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

const getSimilarMovies = async (movieId) => http.get(`/movie/${movieId}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

const getRecommendations = async (movieId) => http.get(`/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

export { getTrending, getMovie, getSearch, getSimilarMovies, getRecommendations };
