import "./App.css";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

// Pages
import Landing from "./Pages/LandingPage";
// ******************

function App() {
  return (
    <div className="App">
      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
      {/* ******************** */}
    </div>
  );
}

export default App;
