import "./App.css";
import React from "react";
import { Routes, Route, Navigate, Link, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// Pages
import ScrollToTop from "./Pages/ScrollToTop";
import PageNotFound from "./Pages/PageNotFound";
import Landing from "./Pages/LandingPage";
import SingleProduct from "./Pages/SingleProductPage";
import { SignUpPage } from "./Pages/SignUpPage";
// ******************

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* ******************** */}
    </div>
  );
}

export default App;
