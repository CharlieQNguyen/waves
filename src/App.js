import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Albums from './components/Albums';
import Artists from "./components/Artists";
import Genres from './components/Genres';
import Home from "./components/Home";
import Songs from "./components/Songs";

function App() {
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
