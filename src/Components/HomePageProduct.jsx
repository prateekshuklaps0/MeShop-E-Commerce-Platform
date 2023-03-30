import "../ComponentsCSS/HomePageProduct.css";
import { NavLink, Navigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function CateAndProductCont() {
  return (
    <div className="CateAndProductCont">
      {/* Sort And Filter Div */}
      <div className="SortFilterCont"></div>

      {/* Products Box Div */}
      <div className="ProductsBox"></div>
    </div>
  );
}

// Main Component Function
function HomePageProduct() {
  return (
    <div className="ContProducts">
      <h1>Products For You</h1>
      <CateAndProductCont />
    </div>
  );
}
export default HomePageProduct;
