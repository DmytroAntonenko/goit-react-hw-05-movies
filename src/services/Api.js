import Axios from 'axios';
const KEY = 'fac1240b5aad57e3278a33c61e6aa9b9';
const BASE_URL = 'https://api.themoviedb.org/3/';


export const fetchTrendingMovies = async () => {
    const response = await Axios.get(
      `${BASE_URL}trending/all/week?api_key=${KEY}`,
    );
    // console.log(response.data.results)
    return response.data.results;
};

export const fetchSearchMovies = async (query) => {
    const response = await Axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&query=${query}`,
    );
    return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const response = await Axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${KEY}`,
    );
    return response.data.results;
};

export const fetchMovieCast = async (movieId) => {
    const response = await Axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}`,
    );
    return response.data.results;
};

export const fetchMovieReviews = async (movieId) => {
    const response = await Axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`,
    );
    return response.data.results;
};