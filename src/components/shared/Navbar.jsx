import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <Link exact to="/favourite">
              Favourite
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
