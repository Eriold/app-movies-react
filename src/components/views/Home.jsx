import React, { Component } from 'react';
import { getDataMovies } from '../api/movies';
import MainLayout from '../layouts/MainLayout';
import MovieCard from '../cards/CardMovie';

const home = 'Home';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    this.setState({
      movies: await getDataMovies(),
    });
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
