import React, { Component } from 'react';
import MainLayout from '../layouts/MainLayout';

const favorite = 'Favourite';

export default class Favourite extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <MainLayout title={favorite}>Add movies favourites here</MainLayout>
      </div>
    );
  }
}
