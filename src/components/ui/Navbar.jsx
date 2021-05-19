import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/heroteam">
          Hero Team
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              Search
            </NavLink>
          </div>
        </div>

        <ul className="navbar-nav ml-auto">
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
