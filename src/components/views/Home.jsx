/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { getDataMovies } from '../api/movies';
import MainLayout from '../layouts/MainLayout';
import MovieCard from '../cards/CardMovie';

const home = 'Home';

const alert = err => {
  return alert(err);
};

const massageMovieData = movie => ({
  id: movie.id,
  title: movie.title,
  year: movie.release_date,
  image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
  overview: movie.overview,
});

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getDataMovies(
      res => {
        this.setState({
          movies: res.data.results.map(movie => massageMovieData(movie)),
        });
      },
      err => {
        alert(err);
      }
    );
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <MainLayout title={home}>
          {movies.map(movie => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </MainLayout>
      </div>
    );
  }
}
