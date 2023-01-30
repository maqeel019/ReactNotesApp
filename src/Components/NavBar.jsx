// import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="navbar-brand" to="/">
                Home
              </Link>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/project1">
                  ReactIntroCard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project2">
                  PortFolioCard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/airbnb">
                  Airbnb
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project3">
                  Practice
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
