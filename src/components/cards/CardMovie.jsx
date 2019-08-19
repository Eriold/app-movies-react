import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CardMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  componentDidMount() {}

  handleCheck = () => {
    this.setState(state => ({
      checked: !state.checked,
    }));
  };

  render() {
    const { data } = this.props;
    const { id, title, year, image, overview } = data;
    const { checked } = this.state;
    return (
      <div className="movie-container">
        <div className="favourite-container">
          <button
            onClick={this.handleCheck}
            className="favourite-button"
            type="button"
          >
            <span
              className={`fa fa-star favourite-star ${
                checked ? 'checked' : ''
              }`}
            />
          </button>
        </div>
        <Link to={`/detail/${id}`} className="url-title">
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
