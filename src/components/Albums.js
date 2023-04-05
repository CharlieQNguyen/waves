import React from "react";
import "./Styles.css";
import AlbumCard from "./AlbumCard";

const Albums = () => {
  return(
    <div className="container">
      <div className="topAlbums">
        <h3>Today's Top Albums</h3> 
        <AlbumCard />
        </div>
        <div className="hiphopAlbums">
        <h3>Hip-Hop</h3> 
        </div>
        <div className="countryAlbums">
        <h3>Country</h3> 
        </div>
        <div className="rnbAlbums">
        <h3>Rhythm and Blues </h3> 
        </div>
        <div className="popAlbums">
        <h3>Pop</h3> 
        </div>
    </div>
  )
}
export default Albums;
