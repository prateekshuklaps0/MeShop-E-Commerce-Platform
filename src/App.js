import "./App.css";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

// Pages
import Landing from "./Pages/LandingPage";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
// ******************

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Landing</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Product">Product</NavLink>
      </nav>

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
