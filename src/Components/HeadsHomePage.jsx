import "../ComponentsCSS/HeadsHomePage.css";
import { NavLink, Navigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// Image Imports
// First Head Images
import MahaSundaySaleIMG from "../Images/LandingPageHeader/firstheadImage.webp";
// Second Head Images
import SecondHeadIMG1 from "../Images/LandingPageHeader/SecondHeadIMG1.webp";
import SecondHeadIMG2 from "../Images/LandingPageHeader/SecondHeadIMG2.webp";
import SecondHeadIMG3 from "../Images/LandingPageHeader/SecondHeadIMG3.webp";
// Third Head Images
import ThirdHeadImg1 from "../Images/LandingPageHeader/thirdHeadImg1.webp";
import ThirdHeadImg2 from "../Images/LandingPageHeader/thirdHeadImg2.webp";
import ThirdHeadImg3 from "../Images/LandingPageHeader/thirdHeadImg3.webp";
// Fourth Head Images
import FourthHeadImg1 from "../Images/LandingPageHeader/fourthHeadImg1.webp";
import FourthHeadImg2 from "../Images/LandingPageHeader/fourthHeadImg2.webp";
import FourthHeadImg3 from "../Images/LandingPageHeader/fourthHeadImg3.webp";

// ********************

// First Header
function FirstHeader() {
  return (
    <div className="firstCont">
      <div className="firstHeadLeftCont">
        <h1>Lowest Prices</h1>
        <h1>Best Quality Shopping</h1>
        <div className="headPayModeCont">
          <div className="actualModeDivs">
            <img
              src="https://images.meesho.com/images/pow/freeDelivery.svg"
              alt="Free Delivery"
            />
            <div>
              <p>Free</p>
              <p>Delivery</p>
            </div>
          </div>
          <div className="actualModeDivs COD">
            <img
              src="https://images.meesho.com/images/pow/cod.svg"
              alt="Free Delivery"
            />
            <div>
              <p>Cash on</p>
              <p>Delivery</p>
            </div>
          </div>
          <div className="actualModeDivs COD">
            <img
              src="https://images.meesho.com/images/pow/easyReturns.svg"
              alt="Free Delivery"
            />
            <div>
              <p>Easy</p>
              <p>Returns</p>
            </div>
          </div>
        </div>
        <div className="firstHeadDownloadBTN">
          <img
            src="https://images.meesho.com/images/pow/playstoreSmallIcon.webp"
            alt="Download the Meesho App"
          ></img>
          <h3>Download the Meesho App</h3>
        </div>
      </div>
      <div className="firstHeadRightCont">
        <img src={MahaSundaySaleIMG} alt="MahaSundaySaleIMG" />
      </div>
    </div>
  );
}
// ********************

// Top Categories to choose from
function TopCategoriesHead() {
  return (
    <div className="TopCategoriesHeadCont">
      <div className="PinkLine"></div>
      <h1>Top Categories to choose from</h1>
      <div className="PinkLine"></div>
    </div>
  );
}
// ********************

// Second Header
function SecondHeader() {
  return (
    <div className="SecondCont">
      <div className="SecondLeftDiv">
        <img src={SecondHeadIMG1} alt="Women's Store" />
      </div>
      <div className="SecondRightDiv">
        <h1>Be fashion forward</h1>
        <div className="SecondRightIMGCont">
          <img src={SecondHeadIMG2} alt="Men Store" />
          <img src={SecondHeadIMG3} alt="Kid's Store" />
        </div>
      </div>
    </div>
  );
}
// ********************

const thirdHeadElements = {
  text: "Essentials",
  cards: [
    { img: "ThirdHeadImg1", buttonText: "Home Decor" },
    { img: "ThirdHeadImg2", buttonText: "Kitchen Appliances" },
    { img: "ThirdHeadImg3", buttonText: "Health Care" },
  ],
};
const fourthHeadElements = {
  text: "New styles",
  cards: [
    { img: "FourthHeadImg1", buttonText: "Accessories" },
    { img: "FourthHeadImg2", buttonText: "Footwear" },
    { img: "FourthHeadImg3", buttonText: "Electronics" },
  ],
};
// Third and Fourth Header Header
function ThirdAndFourthHead(props) {
  return <div className="CombinedHeadCont"></div>;
}
// ********************

// Main Function
function HeadsHomePage() {
  return (
    <div className="HeadContainer">
      <FirstHeader />
      <TopCategoriesHead />
      <SecondHeader />
      <ThirdAndFourthHead obj={thirdHeadElements} />
      <ThirdAndFourthHead obj={fourthHeadElements} />
    </div>
  );
}

export default HeadsHomePage;
