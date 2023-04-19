import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Albums from './components/Albums';
import Artists from "./components/Artists";
import Genres from './components/Genres';
import Home from "./components/Home";
import Songs from "./components/Songs";

function App() {
  
const CLIENT_ID = "0283f12116d640dc8c380e85e158b619"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


  return (
    <Router>

<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>

      <Routes>
        <Route exact path="/Albums" element={<Albums />} />
        <Route exact path="/Artists" element={<Artists />} />
        <Route exact path="/Genres" element={<Genres />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Songs" element={<Songs />} />
      </Routes>
    </Router>
  );
}

export default App;
