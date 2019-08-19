import React, { Component } from 'react';
import { getDataMovies, massageMovieData } from '../api/movies';
import MainLayout from '../layouts/MainLayout';
import MovieCard from '../cards/CardMovie';

const home = 'Home';

const alert = err => {
  return alert(err);
};

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
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
            <MovieCard key={movie.id} data={movie} />
          ))}
        </MainLayout>
      </div>
    );
  }
}
