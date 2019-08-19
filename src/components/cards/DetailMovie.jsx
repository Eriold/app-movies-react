import React, { Component } from 'react';

export default class DetailMovie extends Component {
  componentDidMount() {}

  render() {
    const { movie } = this.props;
    const { image, title } = movie;
    return (
      <div>
        <div>
          <div>
            <img src={image} alt="Movie" />
          </div>
          <div>
            <h1>{title}</h1>
            <h2>peli</h2>
          </div>
        </div>
        <div>hola</div>
      </div>
    );
  }
}
