/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import './detailMovie.css';

export default class DetailMovie extends Component {
  componentDidMount() {}

  render() {
    const { movie, review } = this.props;
    const { year, runtime, image, languaje, title, genres, overview } = movie;
    const { author, content } = review;
    return (
      <div className="detail-main">
        <div className="detail-first">
          <div className="detail-img">
            <img src={image} alt="Movie" className="detail-image" />
            <h4>{genres}</h4>
          </div>
          <div className="detail-info">
            <label htmlFor="title" className="detail-title">
              {title}
            </label>
            <h4>
              {' '}
              <label htmlFor="info" className="detail-subtitle">
                {' '}
                Year:{' '}
              </label>
              {year}
            </h4>
            <h4>
              {' '}
              <label htmlFor="info" className="detail-subtitle">
                {' '}
                Duration:{' '}
              </label>
              {runtime} minutes
            </h4>
            <h4>
              {' '}
              <label htmlFor="info" className="detail-subtitle">
                {' '}
                Original Languaje:{' '}
              </label>
              {languaje}
            </h4>
            <h4>
              {' '}
              <label htmlFor="info" className="detail-subtitle">
                {' '}
                Author:{' '}
              </label>
              {author}
            </h4>
            <h4>
              {' '}
              <label htmlFor="info" className="detail-subtitle">
                {' '}
                Short Description:
              </label>
              {overview}
            </h4>
          </div>
        </div>
        <div className="detail-description">
          <h4>{content}</h4>
        </div>
      </div>
    );
  }
}
