import axios from 'axios';

const API_KEY = '2e6bfefb5e54d83f78d1b38be487bb65';
const getMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const config = { 'Access-Control-Allow-Origin': '*' };

export function getDataMovies(callback, errorcallback) {
  axios
    .get(getMovies, config)
    .then(res => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch(err => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
}

export const getDataIdMovies = id =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
    .then(response => response.data);

export const getDataDetailMovies = id =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(response => response.data);
