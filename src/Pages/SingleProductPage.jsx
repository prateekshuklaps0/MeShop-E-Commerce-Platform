import NavBar from "../Components/NavBar";
import SingleProductDetails from "../Components/SingleProductDetails";
import { HomePageProduct, GenerateCards } from "../Components/HomePageProduct";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import { NavLink, Navigate, Link, useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// Imported Data
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

// Search Function
const SearchByProductId = (id) => {
  var foundObj = [...ProductsList].filter((item, ind) => item.id == id);
  return foundObj;
};

// Main Function
function SingleProduct() {
  const { productId } = useParams();
  const [requiredObj, SetRequiredObj] = useState({});

  useEffect(() => {
    SetRequiredObj((prev) => SearchByProductId(productId));
  }, []);

  return (
    <div>
      {/* <NavBar /> */}
      <SingleProductDetails detail={requiredObj} />
      <Faq />
      <Footer />
    </div>
  );
}
export default SingleProduct;
