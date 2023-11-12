// src/App.js
import React from "react";
import Slider from "./Slider";
import "./Slider.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Meal Slider App</h1>
      </div>

      <Slider />
    </div>
  );
}

export default App;
