import React, { Component } from 'react';
import MainLayout from '../layouts/MainLayout';

const by = 'Make by Daniel Camilo';

export default class About extends Component {
  componentDidMount() {}

  render() {
    return (
      <MainLayout title={by}>
        <div className="about-aling">
          <h1>
            <a
              href="https://github.com/Eriold/app-movies-react"
              className="about-title"
            >
              Github
            </a>
          </h1>
        </div>
      </MainLayout>
    );
  }
}
