import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar';
import Home from './components/views/Home';
import Favourite from './components/views/Favourite';

function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/favourite" component={Favourite} />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
