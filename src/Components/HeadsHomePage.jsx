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
// Fifth Head Images
import FifthHeadIMG from "../Images/LandingPageHeader/FifthHeadIMG.webp";
import GPStoreImg from "../Images/StoreButtons/GPButton.jpg";
import AppStoreImg from "../Images/StoreButtons/APButton.jpg";

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
          <h3>Download the MeShop App</h3>
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
  id: 3,
  text: "Essentials",
  cards: [
    { img: ThirdHeadImg1, buttonText: "Home Decor" },
    { img: ThirdHeadImg2, buttonText: "Kitchen Appliances" },
    { img: ThirdHeadImg3, buttonText: "Health Care" },
  ],
};
const fourthHeadElements = {
  id: 4,
  text: "New styles",
  cards: [
    { img: FourthHeadImg1, buttonText: "Accessories" },
    { img: FourthHeadImg2, buttonText: "Footwear" },
    { img: FourthHeadImg3, buttonText: "Electronics" },
  ],
};
// Third and Fourth Header Header
function ThirdAndFourthHead(props) {
  const { id, text, cards } = props.obj;
  return (
    <div
      style={
        id == 4
          ? {
              background: "rgb(255,255,255)",
              background:
                "linear-gradient(0deg, rgba(255,255,255,1) -60%, rgba(244,224,186,1) -40%, rgba(251,195,74,1) 77%)",
            }
          : {
              background: "rgb(255,255,255)",
              background:
                "linear-gradient(0deg, rgba(255,255,255,1) -60%, rgba(244,224,186,1) -40%, rgba(251,195,74,1) 54%)",
            }
      }
      className="CombinedHeadCont"
    >
      <div className="combinedLeftdiv">
        <h1>{text}</h1>
        <button>View All</button>
      </div>
      <div className="combinedRightdiv">
        {cards.map((item, ind) => (
          <div className="combinedCardsDiv" key={ind + text}>
            <img src={item.img} alt={item.buttonText} />
            <button
              style={
                item.buttonText == "Kitchen Appliances"
                  ? { padding: "7px 0px", width: "187px" }
                  : item.buttonText == "Accessories"
                  ? { padding: "7px 5px", width: "145px" }
                  : { padding: "7px 15px", width: "145px" }
              }
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
// ********************

// Fifth Header
function FifthHead() {
  return (
    <div
      className="fiftheadCont"
      style={{
        backgroundImage: `url(${require("../Images/LandingPageHeader/FifthHeadIMG.webp")})`,
        backgroundSize: "cover",
      }}
    >
      <h3>Become a Reseller and</h3>
      <h1>Start your Online Business</h1>
      <h1>with Zero Investment</h1>
      <div>
        <img src={AppStoreImg} alt="" />
        <img src={GPStoreImg} alt="" />
      </div>
    </div>
  );
}
// ********************

// Sixth Header
function SixthHead() {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../Images/LandingPageHeader/SixthHeadIMG.webp")})`,
        backgroundSize: "cover",
      }}
      className="sixtheadCont"
    >
      <h1>Register as a MeShop Supplier</h1>
      <p>Sell your products to crores of customers at 0% commission</p>
      <div className="subOptionsCont">
        <div className="subOptionCardDiv">
          <svg
            width="20"
            height="21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            iconsize="20"
            class="sc-bcXHqe cCbgOs"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 10.5C0 4.98 4.48.5 10 .5s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10Zm7.283 4.293c.39.39 1.02.39 1.41 0l7.58-7.59a.996.996 0 1 0-1.41-1.41l-6.88 6.88-2.88-2.88a.996.996 0 1 0-1.41 1.41l3.59 3.59Z"
              fill="#06A759"
            ></path>
          </svg>
          <h3>Grow your business 10x</h3>
        </div>
        <div className="subOptionCardDiv MiddleSupplier">
          <svg
            width="20"
            height="21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            iconsize="20"
            class="sc-bcXHqe cCbgOs"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 10.5C0 4.98 4.48.5 10 .5s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10Zm7.283 4.293c.39.39 1.02.39 1.41 0l7.58-7.59a.996.996 0 1 0-1.41-1.41l-6.88 6.88-2.88-2.88a.996.996 0 1 0-1.41 1.41l3.59 3.59Z"
              fill="#06A759"
            ></path>
          </svg>
          <h3>Enjoy 100% Profit</h3>
        </div>
        <div className="subOptionCardDiv">
          <svg
            width="20"
            height="21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            iconsize="20"
            class="sc-bcXHqe cCbgOs"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 10.5C0 4.98 4.48.5 10 .5s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10Zm7.283 4.293c.39.39 1.02.39 1.41 0l7.58-7.59a.996.996 0 1 0-1.41-1.41l-6.88 6.88-2.88-2.88a.996.996 0 1 0-1.41 1.41l3.59 3.59Z"
              fill="#06A759"
            ></path>
          </svg>
          <h3>Sell all over India</h3>
        </div>
      </div>
      <button>
        <h2>Sign up</h2>
        <h2>now</h2>
      </button>
    </div>
  );
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
      <FifthHead />
      <SixthHead />
    </div>
  );
}

export default HeadsHomePage;
