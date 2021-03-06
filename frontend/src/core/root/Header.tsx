import React from 'react';
import '../../utils/StyleUtils.scss';
import { Link } from 'react-router-dom';

export function Header(): React.ReactElement {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link
          className="navbar-brand"
          to={{ pathname: '/' }}
        >
          LOGO
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{ pathname: '/' }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{ pathname: '/data' }}
              >
                Data
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={{ pathname: '/about' }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
