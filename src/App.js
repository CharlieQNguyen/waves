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

const CLIENT_ID = "9bf47149b11f47aa8528dc07bdf03beb";
const CLIENT_SECRET = "f7ec70bb972848b189ca56b357ee41db";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // API Acces Token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

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
