import "../ComponentsCSS/HomePageProduct.css";
import { NavLink, Navigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// Import Data
import {
  ProductsList,
  WomenEthnicList,
  ElectronicsList,
  MenList,
  BagsFootwearList,
  BeautyHealthList,
  HomeKitchenList,
  WomenWesternList,
  KidsList,
  JewelleryAccessoriesList,
} from "../Data/Products";

// Cards Generating Function
function GenerateCards({ array }) {
  console.log(array);
  return (
    <div className="ProductsBox">
      {array.map((item, ind) => (
        <div className="OneProductCardCont" key={item.id}>
          <img
            src={item.img}
            alt={`${item.id} - ${item.category} - ${item.subCate}`}
          ></img>
        </div>
      ))}
    </div>
  );
}

// FilterSort and Product Container Function
function CateAndProductCont() {
  return (
    <div className="CateAndProductCont">
      {/* Sort And Filter Div */}
      <div className="SortFilterCont"></div>

      {/* Products Box Div */}
      <GenerateCards array={ProductsList} />
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
export { HomePageProduct, GenerateCards };
