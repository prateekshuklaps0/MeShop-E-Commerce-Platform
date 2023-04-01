import "../ComponentsCSS/HomePageProduct.css";
import { NavLink, Navigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Spinner,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

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

// Cards Generating Function
function GenerateCards({ array, swapLoading }) {
  return (
    <div className="ProductsBox">
      {array.map((item, ind) => {
        return swapLoading ? (
          <Spinner size="xl" color="red.500" mx="auto" my="40" />
        ) : (
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
        );
      })}
    </div>
  );
}

// FilterSort and Product Container Function
function CateAndProductCont() {
  const sortOptions = [
    "Relevance",
    "New Arrivals",
    "Price (High to Low)",
    "Price (Low to High)",
    "Ratings",
    "Discount",
  ];
  const CateFilterOptionsList = [
    {
      value: "Beauty & Health",
      label: "Beauty & Health",
      data: BeautyHealthList,
      checked: false,
      color: "grey",
    },
    {
      value: "Electronics",
      label: "Electronics",
      data: ElectronicsList,
      checked: false,
      color: "grey",
    },
    {
      value: "Men",
      label: "Men",
      data: MenList,
      checked: false,
      color: "grey",
    },
    {
      value: "Jewellery & Accessories",
      label: "Jewellery & Accessories",
      data: JewelleryAccessoriesList,
      checked: false,
      color: "grey",
    },
    {
      value: "Women Ethnic",
      label: "Women Ethnic",
      data: WomenEthnicList,
      checked: false,
      color: "grey",
    },
    {
      value: "Home & Kitchen",
      label: "Home & Kitchen",
      data: HomeKitchenList,
      checked: false,
      color: "grey",
    },
    {
      value: "Kids",
      label: "Kids",
      data: KidsList,
      checked: false,
      color: "grey",
    },
    {
      value: "Bags & Footwear",
      label: "Bags & Footwear",
      data: BagsFootwearList,
      checked: false,
      color: "grey",
    },
    {
      value: "Women Western",
      label: "Women Western",
      data: WomenWesternList,
      checked: false,
      color: "grey",
    },
  ];
  const RestFilterOptions = [
    "Color",
    "Discount",
    "Brand",
    "Warranty",
    "Size",
    "Combo",
  ];

  const [sortOption, setSortOption] = useState(sortOptions[0]);
  const [sortDropDown, setsortDropDown] = useState(false);
  const [swapLoading, setSwapLoading] = useState(false);
  const [showFilterDropDown, setShowFilterDropDown] = useState(false);
  const [toggleSortFilter, setToggleSortFilter] = useState(true);
  const [checkedIndex, setCheckedIndex] = useState(null);
  const [FilterHeading, setFilterHeading] = useState("");
  const [FilteredCateData, setFilteredCateData] = useState([...ProductsList]);

  const sortDDRef = useRef(null);

  const handleSortDropDown = () => {
    setsortDropDown((prev) => !prev);
    setToggleSortFilter((prev) => true);
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
    setsortDropDown(false);

    setSwapLoading(true);
    setTimeout(() => {
      setSwapLoading((prev) => false);
    }, 500);
  };

  // Sorting Products
  const [presentProducts, setpresentProducts] = useState([...ProductsList]);

  useEffect(() => {
    if (toggleSortFilter) {
      setCheckedIndex((prev) => null);
      if (sortOption == "Price (High to Low)") {
        setpresentProducts((prev) =>
          [...ProductsList].sort(function (a, b) {
            return b.price - a.price;
          })
        );
      } else if (sortOption == "Price (Low to High)") {
        setpresentProducts((prev) =>
          [...ProductsList].sort(function (a, b) {
            return a.price - b.price;
          })
        );
      } else if (sortOption == "Ratings") {
        setpresentProducts((prev) =>
          [...ProductsList].sort(function (a, b) {
            return b.rating - a.rating;
          })
        );
      } else {
        setpresentProducts((prev) => [...ProductsList]);
      }
    } else {
      setpresentProducts((prev) => [...FilteredCateData]);
    }
  }, [presentProducts, toggleSortFilter, FilterHeading, FilteredCateData]);

  // Cate Filter Checkbox

  const handleCheckboxChange = (index, text, data) => {
    if (index === checkedIndex) {
      setCheckedIndex(null);
      setToggleSortFilter((prev) => true);
    } else {
      setCheckedIndex(index);
      setToggleSortFilter((prev) => false);
      setFilterHeading((prev) => text);
      setFilteredCateData((prev) => [...data]);
      setSortOption(sortOptions[0]);
      setSwapLoading(true);
      setTimeout(() => {
        setSwapLoading((prev) => false);
      }, 500);
    }
  };

  return (
    <div className="CateAndProductCont">
      {/* Sort And Filter Box Div */}
      <div className="SortFilterCont">
        {/* Sort*/}
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

        {/* Filter  */}
        <div className="FilterCont">
          <div className="HeadingFilter">
            <h2>FILTERS</h2>
            <h3>1000+ Products</h3>
          </div>
          {/* Category Filter */}
          <div className="CategoryFilterCont">
            <div
              onClick={() => setShowFilterDropDown((prev) => !prev)}
              className="CateFiltHead"
            >
              <h4 className="FilterNames">Category</h4>
              <Arrow state={showFilterDropDown} />
            </div>
            {showFilterDropDown && (
              <div className="FilterOptions">
                <div className="FilterSearchCont">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 20 20"
                    fill="greyT2"
                    xmlns="http://www.w3.org/2000/svg"
                    iconSize="20"
                    class="sc-gswNZR jweCCb"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M19.77 18.6702L16.01 14.9102C17.33 13.3302 18.13 11.3002 18.13 9.08024C18.13 4.06024 14.07 0.000244141 9.06 0.000244141C4.06 0.000244141 0 4.06024 0 9.08024C0 14.1002 4.06 18.1602 9.06 18.1602C11.29 18.1602 13.33 17.3502 14.91 16.0102L18.67 19.7702C18.97 20.0702 19.47 20.0702 19.77 19.7702C20.08 19.4702 20.08 18.9702 19.77 18.6702ZM9.06 16.6002C4.92 16.6002 1.55 13.2302 1.55 9.08024C1.55 4.93024 4.92 1.56024 9.06 1.56024C13.2 1.56024 16.57 4.93024 16.57 9.08024C16.57 13.2302 13.2 16.6002 9.06 16.6002Z"
                        fill="#666666"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0 0.000244141)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <input
                    className="FilterSearch"
                    type="text"
                    placeholder="Search"
                  />
                </div>
                {/* <p>
                {checkedIndex !== null
                  ? CateFilterOptionsList[checkedIndex].label
                  : ""}
              </p> */}
                <form className="FilterCateForm">
                  {CateFilterOptionsList.map((item, ind) => {
                    return (
                      <label className="FilterCateLabel" key={ind + item + ind}>
                        <Checkbox
                          onChange={() =>
                            handleCheckboxChange(ind, item.value, item.data)
                          }
                          value={item.value}
                          isChecked={ind === checkedIndex}
                          data={item.data}
                          size="md"
                          colorScheme="pink"
                          borderColor="black.500"
                          color={ind == checkedIndex ? "black" : "grey"}
                        >
                          {item.label}
                        </Checkbox>
                      </label>
                    );
                  })}
                </form>
              </div>
            )}
          </div>
          {/* Rest Options */}
          {RestFilterOptions.map((item, ind) => (
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {item}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  This Filter is not Available Now.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Products Box Div */}
      <GenerateCards array={presentProducts} swapLoading={swapLoading} />
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
