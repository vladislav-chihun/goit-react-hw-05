
import axios from 'axios';

const API_KEY = '5499238a19a5e78ff87a4990e8837714';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const trendMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export const searchMovie = async (query) => {
  const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US`);
  return response.data;
}

export const movieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export const movieReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data;
}

export const movieCast = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return response.data;
}
