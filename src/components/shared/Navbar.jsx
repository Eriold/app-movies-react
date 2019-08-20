import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <ul className="navbar-nav mr-auto">
          <li>
            <NavLink exact to="/" className="navbar-brand">
              Movie
            </NavLink>
          </li>
          <li>
            <Link exact to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link exact to="/favourite" className="nav-link">
              Favourite
            </Link>
          </li>
          <li>
            <Link exact to="/about" className="nav-link">
              About
            </Link>
          </li>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Movie"
            onKeyUp={event => movieID(event.target.value)}
          />
        </ul>
      </Navbar>
    </>
  );
};

function movieID(evnt) {
  window.location = `http://localhost:3000/movie/${evnt}`;
}

export default NavBar;
