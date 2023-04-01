import "./App.css";
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

// Pages
import ScrollToTop from "./Pages/ScrollToTop";
import PageNotFound from "./Pages/PageNotFound";
import Landing from "./Pages/LandingPage";
import SingleProduct from "./Pages/SingleProductPage";
// ******************

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* ******************** */}

      {/* <div
        style={{
          backgroundColor: "cyan",
          height: "1200px",
          marginTop: "200px",
        }}
      >
        Test Div
      </div> */}
    </div>
  );
}

export default App;
