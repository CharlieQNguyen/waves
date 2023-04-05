import React from "react";
import "./Styles.css";
import AlbumCard from "./AlbumCard";

const Albums = () => {
  return(
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
  )
}
export default Albums;
