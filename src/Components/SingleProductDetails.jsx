import "../ComponentsCSS/SingleProduct.css";
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

function SearchSimilarProducts(name) {
  console.log(name);
  //   var simProList = [...ProductsList].filter((item, ind) => {
  //     return item?.subCate == name;
  //   });
  //   console.log(simProList);
  //   return simProList;
}

function SingleProductDetails(props) {
  const data = props.detail[0];

  var SimProSubCate = [...ProductsList].filter(
    (item, ind) => item.subCate == data?.subCate
  );
  var showInDom = SimProSubCate.slice(0, Math.min(SimProSubCate.length, 4));

  document.title = `${data?.title}`;
  return (
    <div className="PPOuterCont">
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
        <div className="PPrightDiv"></div>
      </div>
    </div>
  );
}
export default SingleProductDetails;
