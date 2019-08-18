import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CardMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleCheck = () => {
    this.setState(state => ({
      checked: !state.checked,
    }));
  };

  render() {
    const { id, title, year, image, overview } = this.props;
    return (
      <div className="movie-container">
        <Link to={`/movie/${id}`} className="url-title">
          <h1>{title}</h1>
        </Link>
        <div>{year}</div>
        <div className="overview-container">
          <div className="img-container">
            <img className="overview-img" src={image} alt="Movie" />
          </div>
          <div className="text-container">
            <p className="overview-text">{overview}</p>
          </div>
        </div>
      </div>
    );
  }
}
