import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Genres from "./components/Genres";
import Home from "./components/Home";
import Songs from "./components/Songs";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";
import { useState, useEffect } from "react";

function App() {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((element) => element.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
    return (
        <Router>
            {!token ? 
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                : // else if no token
                <button onClick={logout}>Logout</button> }

  return (
    <Router>
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
