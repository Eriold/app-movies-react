import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar';
import Home from './components/views/Home';
import Favourite from './components/views/Favourite';
import Detail from './components/views/Detail';
import About from './components/views/About';
import Search from './components/views/Search';

function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/favourite" component={Favourite} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/about" component={About} />
      <Route exact path="/movie/:id" component={Search} />
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
