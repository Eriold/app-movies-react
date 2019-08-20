import React, { Component } from 'react';
import MainLayout from '../layouts/MainLayout';
import DetailMovie from '../cards/DetailMovie';
import { getFilterReview, getDetailMovies } from '../api/movies';

const detail = 'Detail';

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      review: {},
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const getReview = await getFilterReview(id);
    this.setState({ movie: await getDetailMovies(id) });
    this.setState({ review: getReview[0] });
  }

  render() {
    const { movie, review } = this.state;
    return (
      <MainLayout title={detail}>
        <DetailMovie movie={movie} review={review} />
      </MainLayout>
    );
  }
}
