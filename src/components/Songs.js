import React from "react";
import "./Styles.css";
import SongCard from "./SongCard";

const Songs = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Wave Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Artists
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Songs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Albums
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Learn more
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="topSongs title">
          <h3>Today's Top Songs</h3>

          <div className="row">
            <div className="col-3">
              <SongCard />
            </div>
            <div className="col-3">
              <SongCard />
            </div>
            <div className="col-3">
              <SongCard />
            </div>
            <div className="col-3">
              <SongCard />
            </div>
          </div>
        </div>
        <div className="hiphopSongs title">
          <h3>Hip-Hop</h3>
          <div className="row">
            <div className="col-3">
              <SongCard />
            </div>
            <div className="col-3">
              <SongCard />
            </div>
            <div className="col-3">
              <SongCard />
            </div>
            <div className="col-3">
              <SongCard />
            </div>
          </div>
        </div>
        <div className="countrySongs title">
          <h3>Country</h3>
        </div>

        <div className="rnbSongs title">
          <h3>Rhythm and Blues </h3>
        </div>
        <div className="popSongs title">
          <h3>Pop</h3>
        </div>
      </div>
    </>
  );
};

export default Songs;
