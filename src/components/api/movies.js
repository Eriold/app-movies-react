import axios from 'axios';

const API_KEY = '2e6bfefb5e54d83f78d1b38be487bb65';
const getMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const config = { 'Access-Control-Allow-Origin': '*' };

export const massageMovieData = movie => ({
  id: movie.id,
  title: movie.title,
  year: movie.release_date,
  image: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
  overview: movie.overview,
});

const massageFilterMovie = movie => ({
  id: movie.id,
  author: movie.author,
  content: movie.content,
});

const massageDetailMovie = movie => ({
  id: movie.id,
  year: movie.release_date,
  runtime: movie.runtime,
  image: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
  languaje: movie.original_language,
  title: movie.original_title,
  genres: movie.genres.map(name => name.name),
  overview: movie.overview,
});

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

export const getFilterReview = id =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(res => res.data.results.map(movie => massageFilterMovie(movie)));

export const getDetailMovies = id =>
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
    .then(res => massageDetailMovie(res.data));
