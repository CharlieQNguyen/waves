import React from "react";
import "./Styles.css";
import SongCard from "./SongCard";
import axios from "axios";

const Songs = () => {
  return (
    <>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-body-secondary">
            Toggleable via the navbar brand.
          </span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
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
