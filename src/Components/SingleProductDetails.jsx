import "../ComponentsCSS/SingleProduct.css";
import { GenerateCards } from "./HomePageProduct";
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
  CircularProgress,
  CircularProgressLabel,
  Box,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

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

function SingleProductDetails(props) {
  const data = props.detail[0];

  // Similar Products
  var SimProSubCate = [...ProductsList].filter(
    (item, ind) => item.subCate == data?.subCate
  );
  var showInDom = SimProSubCate.slice(0, Math.min(SimProSubCate.length, 4));

  const [SwapLoading, setSwapLoading] = useState(false);
  useEffect(() => {
    setSwapLoading(true);
    setTimeout(() => {
      setSwapLoading((prev) => false);
    }, 1000);
  }, []);

  document.title = `${data?.title}`;
  return (
    <div className="PPOuterCont">
      {SwapLoading ? (
        <CircularProgress
          marginTop="80"
          marginBottom="60"
          isIndeterminate
          color="red.300"
        />
      ) : (
        <div className="PPInnerCont">
          {/* LeftDiv */}
          <div className="PPleftDiv">
            <div className="imageHolderDiv">
              <img src={data?.img} />
            </div>
            <div className="CartAndBuyDiv">
              <Link to="/cart" className="ProductCartLink cart">
                <svg
                  width="21"
                  height="20"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  color="black"
                  icon="[object Object]"
                  class="sc-bcXHqe flyYkK ProductCard__GhostButtonBigStyled-sc-camkhj-2 Uqksj"
                  btntype="ghost"
                  ml="4"
                  mr="4"
                  stroke="transparent"
                  iconsize="20"
                >
                  <g
                    clip-path="url(#go-to-cart_svg__a)"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="#333"
                  >
                    <path d="M.75 1.5A.75.75 0 0 1 1.5.75h2.084a1.75 1.75 0 0 1 1.68 1.262L6.05 4.72h12.625a1.75 1.75 0 0 1 1.683 2.23L18.661 12.9a1.75 1.75 0 0 1-1.683 1.27H8.303a1.75 1.75 0 0 1-1.695-1.315l-1.845-7.19-.94-3.236a.25.25 0 0 0-.24-.18H1.5a.75.75 0 0 1-.75-.75Zm5.703 4.719 1.608 6.264a.25.25 0 0 0 .242.188h8.675a.25.25 0 0 0 .24-.181l1.698-5.952a.25.25 0 0 0-.24-.319H6.452ZM9.923 16.238a.5.5 0 0 0-.493.506.5.5 0 0 0 .493.506.5.5 0 0 0 .493-.506.5.5 0 0 0-.493-.506Zm-1.993.506a2 2 0 0 1 1.993-2.006 2 2 0 0 1 1.993 2.006 2 2 0 0 1-1.993 2.006 2 2 0 0 1-1.993-2.006ZM15.72 16.238a.5.5 0 0 0-.493.506.5.5 0 0 0 .493.506.5.5 0 0 0 .493-.506.5.5 0 0 0-.493-.506Zm-1.993.506a2 2 0 0 1 1.993-2.006 2 2 0 0 1 1.993 2.006 2 2 0 0 1-1.993 2.006 2 2 0 0 1-1.993-2.006Z"></path>
                  </g>
                  <defs>
                    <clipPath id="go-to-cart_svg__a">
                      <path
                        fill="#fff"
                        transform="translate(.5)"
                        d="M0 0h20v20H0z"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>
                <h1>Add to Cart</h1>
              </Link>
              <Link to="/cart" className="ProductBuyLink">
                <svg
                  width="20"
                  height="20"
                  fill="transparent"
                  xmlns="http://www.w3.org/2000/svg"
                  icon="[object Object]"
                  class="sc-bcXHqe ioQafO ProductCard__SolidButtonBigStyled-sc-camkhj-1 dEqZtN"
                  btntype="solid"
                  ml="4"
                  mr="4"
                  stroke="#ffffff"
                  iconsize="20"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.927 3.28A.956.956 0 0 0 2.576 4.63l5.437 5.438-5.3 5.3a.956.956 0 1 0 1.352 1.351l5.43-5.43a1.727 1.727 0 0 0-.032-2.474L3.927 3.28Z"
                    fill="#fff"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.631 3.28A.956.956 0 1 0 10.28 4.63l5.437 5.438-5.3 5.3a.956.956 0 1 0 1.352 1.351l5.43-5.43a1.727 1.727 0 0 0-.032-2.474L11.631 3.28Z"
                    fill="#fff"
                  ></path>
                </svg>
                <h1>Buy Now</h1>
              </Link>
            </div>
            <div className="SimProDiv">
              <h1>
                <p>{showInDom.length}</p>Similar Products
              </h1>
              <div className="SimProImgDiv">
                {showInDom.map((item, ind) => {
                  return (
                    <img
                      key={item.price + item.id}
                      className="SimProImg"
                      src={item.img}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Div */}
          <div className="PPrightDiv">
            {/* Name Container */}
            <div className="ProductNameCont">
              <h1>{data?.title}</h1>
              <h1>
                ₹{data?.price} <InfoOutlineIcon w={4} marginLeft={2} />
              </h1>
              <div className="ratingAndReviewCont">
                <div className="ratingDiv">
                  <h4 className="TopratingText">{data?.rating}</h4>
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
                <h5 className="SPratingsReview">
                  {data?.ratingNum} Ratings, {data?.reviews} Reviews
                </h5>
              </div>
              <h3 className="FreeDelivery">Free Delivery</h3>
            </div>
            {/* Product Detail */}
            <div className="MoreDetDiv">
              <h1 className="commonHeading">Product Details</h1>
              <p>Name : {data?.title}</p>
              <p>Pattern : Printed</p>
              <p>Net Quantity (N) : Single</p>
              <p>Country of Origin : India</p>
              <p>
                {data?.id % 2 == 0
                  ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et purus eros. Fusce dictum velit eget dolor tempor, in tempor quam commodo. Donec faucibus ullamcorper libero, id tempor quam gravida id. Nunc congue risus sit amet sapien malesuada, id mattis massa sollicitudin. Ut ac semper lorem."
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel eros eget lectus bibendum sagittis. In hac habitasse platea dictumst. Pellentesque sit amet nibh non ipsum gravida consequat. Ut consequat diam vel sapien accumsan, ac laoreet lorem ultricies. Integer maximus eu urna ut viverra."}
              </p>

              <Link className="moreInfoLink" to="notfOUND">
                More Information
              </Link>
            </div>

            {/* Sold By */}
            <div className="SoldByDiv">
              <h1 className="commonHeading">Sold By</h1>
              <div className="SoldByChildDiv">
                <div className="SellerNameDiv">
                  <div className="SellerIconDiv"></div>
                  <h1>
                    {data?.id % 2 == 0 ? "Cosmic Merchants" : "MaximBuyers"}
                  </h1>
                </div>
                <Link className="SoldByChildDivbutton" to="notFound">
                  View Shop
                </Link>
              </div>
              <div className="ThirdSoldbyDiv">
                <div className="SoldByThirdChilds">
                  <div className="SoldByRating">
                    <p>{data?.rating}</p>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 20 20"
                      fill="#5585f8"
                      xmlns="http://www.w3.org/2000/svg"
                      ml="4"
                      iconsize="10"
                      class="sc-bcXHqe hELlUp"
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
                  <h4 className="SoldByLastText">{data?.ratingNum} Ratings</h4>
                </div>
                <div className="SoldByThirdChilds">
                  <h5 className="SoldByNumText">{data?.reviews * 2}</h5>
                  <h4 className="SoldByLastText">Followers</h4>
                </div>
                <div className="SoldByThirdChilds">
                  <h5 className="SoldByNumText">{data?.reviews}</h5>
                  <h4 className="SoldByLastText">Products</h4>
                </div>
              </div>
            </div>

            {/* Products Rating and Reviews */}
            {/* <div className="PRRCont">
            <h1 className="commonHeading">Product Ratings & Reviews</h1>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
{
  /* <h1 className="commonHeading"></h1> */
}
export default SingleProductDetails;
