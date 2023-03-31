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

// Arrow Element
function Arrow({ state }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      iconSize="28"
      class="sc-gswNZR hKmskQ sortAndFilterArrow"
      style={{
        transform: state ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path
        d="m14.161 7.31-4.166 4.125-4.167-4.124a1.075 1.075 0 0 0-1.514 0 1.051 1.051 0 0 0 0 1.499l4.929 4.88a1.077 1.077 0 0 0 1.514 0l4.929-4.88a1.051 1.051 0 0 0 0-1.5 1.1 1.1 0 0 0-1.525 0Z"
        fill="#666"
      ></path>
    </svg>
  );
}

// Filter And Sort Generate Function
function FilterAndSort() {
  const sortOptions = [
    "Relevance",
    "New Arrivals",
    "Price (High to Low)",
    "Price (Low to High)",
    "Ratings",
    "Discount",
  ];

  const [sortOption, setSortOption] = useState(sortOptions[0]);
  const [sortDropDown, setsortDropDown] = useState(false);
  const sortDDRef = useRef(null);

  const handleSortDropDown = () => {
    setsortDropDown((prev) => !prev);
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
    setsortDropDown(false);
  };

  return (
    <div className="SortFilterCont">
      {/* Sort Price And Rating */}
      <div onClick={handleSortDropDown} className="sortCont">
        <div className="sortTextHolder">
          <h2 className="SortBy">Sort by : </h2>
          <h2 className="sortedValueText">{sortOption}</h2>
        </div>
        <Arrow state={sortDropDown} />
      </div>
      {/* DropDown For Sort Price And Rating */}
      {sortDropDown && (
        <div className="sortDD">
          {sortOptions.map((item, ind) => (
            <h2
              key={item}
              className={`${
                sortOption === item ? "sortActive" : "sortInActive"
              }`}
              onClick={() => handleSortOptionChange(item)}
            >
              {item}
            </h2>
          ))}
        </div>
      )}
    </div>
  );
}

// Cards Generating Function
function GenerateCards({ array }) {
  return (
    <div className="ProductsBox">
      {array.map((item, ind) => (
        <div className="OneProductCardCont" key={item.id}>
          <img
            src={item.img}
            alt={`${item.id} - ${item.category} - ${item.subCate}`}
          ></img>
          <div className="productCardTextsHolder">
            <h1>{item.title}</h1>
            <p>
              ₹{item.price} <span>onwards</span>
            </p>
            <h3>Free Delivery</h3>
            <div className="ratingAndReviewCont">
              <div className="ratingDiv">
                <h4>{item.rating}</h4>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 20 20"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  ml="4"
                  iconSize="10"
                  class="sc-gswNZR eMqtuK"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M19.5399 6.85L13.6199 5.5L10.5099 0.29C10.3999 0.11 10.2099 0 9.99993 0C9.78993 0 9.59993 0.11 9.48993 0.29L6.37993 5.5L0.45993 6.85C0.25993 6.9 0.0899297 7.05 0.0299297 7.25C-0.0300703 7.45 0.00992969 7.67 0.14993 7.83L4.13993 12.4L3.58993 18.44C3.56993 18.65 3.65993 18.85 3.82993 18.98C3.99993 19.1 4.21993 19.13 4.41993 19.05L9.99993 16.64L15.5799 19.03C15.6599 19.06 15.7399 19.08 15.8099 19.08C15.8099 19.08 15.8099 19.08 15.8199 19.08C16.1199 19.09 16.4199 18.82 16.4199 18.48C16.4199 18.42 16.4099 18.36 16.3899 18.31L15.8499 12.38L19.8399 7.81C19.9799 7.65 20.0199 7.43 19.9599 7.23C19.9099 7.04 19.7399 6.89 19.5399 6.85Z"
                      fill="#666666"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20" height="19.08" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h5>{item.reviews} Reviews</h5>
            </div>
          </div>
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
      <FilterAndSort />

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
