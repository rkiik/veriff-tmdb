import axios from 'axios';

const API_DEFAULT_QUERY_PARAMS = {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
};

const http = axios.create({
    baseURL: process.env.REACT_APP_TMDB_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

const getSearch = async (query: string) =>
    http.get(`/search/movie`, {
        params: {
            ...API_DEFAULT_QUERY_PARAMS,
            query,
            include_adult: true,
        },
    });

const getTrending = async (mediaType: string, timeWindow: string) =>
    http.get(`/trending/${mediaType}/${timeWindow}`, {
        params: {
            ...API_DEFAULT_QUERY_PARAMS,
        },
    });

const getMovie = async (movieId: string) =>
    http.get(`/movie/${movieId}`, {
        params: {
            ...API_DEFAULT_QUERY_PARAMS,
            append_to_response: 'release_dates,videos,credits',
        },
    });

const getSimilarMovies = async (movieId: string) =>
    http.get(`/movie/${movieId}/similar`, {
        params: {
            ...API_DEFAULT_QUERY_PARAMS,
        },
    });

const getRecommendations = async (movieId: string) =>
    http.get(`/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);

export { getTrending, getMovie, getSearch, getSimilarMovies, getRecommendations };
