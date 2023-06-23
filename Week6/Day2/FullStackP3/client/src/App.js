import { useEffect, useState } from "react"
import './App.css';

import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import { Details } from "./components/Details";

function App() {
  return (
    <div className="App">
      <fieldset>
        <legend>Spotify</legend>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/music/:mid" element={<Details />} />
        </Routes>
      </fieldset>
    </div>
  );
}

export default App;
