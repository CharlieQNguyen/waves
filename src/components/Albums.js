import React from "react";
import "./Styles.css";
import AlbumCard from "./AlbumCard";
import axios from "axios";
import { useState, useEffect } from "react";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    let token = window.localStorage.getItem("token");

    const fetchAlbums = async () => {
      try {
        const { data } = await axios.get(
          `https://api.spotify.com/v1/albums?ids=4aawyAB9vmqN3uQ7FjRGTy`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAlbums(data.albums);
        setError(null);
      } catch (error) {
        setError(error.message);
        setAlbums(null);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className="container">
      <div className="topAlbums title">
        <h3>Today's Top Albums</h3>

        <div className="row">
          <div className="col-3">
            <AlbumCard />
          </div>
          <div className="col-3">
            <AlbumCard />
          </div>
          <div className="col-3">
            <AlbumCard />
          </div>
          <div className="col-3">
            <AlbumCard />
          </div>
        </div>
      </div>
      <div className="hiphopAlbums title">
        <h3>Hip-Hop</h3>
        <div className="row">
          <div className="col-3">
            <AlbumCard />
          </div>
          <div className="col-3">
            <AlbumCard />
          </div>
          <div className="col-3">
            <AlbumCard />
          </div>
          <div className="col-3">
            <AlbumCard />
          </div>
        </div>
      </div>
      <div className="countryAlbums title">
        <h3>Country</h3>
      </div>
      <div className="rnbAlbums title">
        <h3>Rhythm and Blues </h3>
      </div>
      <div className="popAlbums title">
        <h3>Pop</h3>
      </div>
    </div>
  );
};
export default Albums;
