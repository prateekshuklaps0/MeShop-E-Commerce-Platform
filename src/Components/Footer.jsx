import "../ComponentsCSS/Footer.css";
import { NavLink, Navigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const HiddenFooterContent = [
  {
    title: "Meesho: Affordable Online Shopping at Your Fingertips",
    text: [
      "There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly",
      "what you are looking for. And now with Meesho, you can shop for anything you want at the lowest prices in the market.  Even if you want to shop for cool gifts for your friends and",
      "family, there are many options that you can find on the Internet. ",
    ],
    highlight: [],
  },
  {
    title: "A Huge Selection of Products Across All Categories",
    text: [
      "We have a vast inventory of products ranging from apparel to cosmetics to home utility and kitchen products and more. With over 50 lakh products and 650+ product categories,",
      "Meesho is sure to have everything you need. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal.",
      "Whether you're in the market for new clothes, accessories, or just some daily-use items for home, Meesho has what you need.",
    ],
  },
  {
    title: "Women's Ethnic Wear Collection",
    text: [
      "When it comes to women's ethnic wear , we have everything you need to find the perfect outfit for any occasion. Whether you're looking for traditional sarees and blouses, or",
      "something more modern like suits or casual Kurtis , we have it all. And with our stunning collection of accessories, footwear, and jewellery sets , it's easy to put together a complete",
      "look that will turn heads at your next wedding or festive celebration. So come and shop with us today!",
    ],
    highlight: ["women's", "ethnic", "wear", "Kurtis", "jewellery", "sets"],
  },
  {
    title: "Accessories, Jewellery, and Footwear",
    text: [
      "You may have your favorite outfit picked out but accessories can really add a sense of style and individuality that make you stand out! With so many types of accessories",
      "available, it can be difficult to find the perfect piece for yourself. Fortunately, Meesho has a wide variety of jewellery sets, handbags , belts, heels, casual footwear, watches , etc. With",
      "so many options, you'll be sure to find the perfect accessories for any outfit!",
    ],
    highlight: ["handbags", "watches"],
  },
  {
    title: "Western Wear for Women",
    text: [
      "Meesho is the best place to find fashionable and affordable western wear for women. With a constantly updating inventory of casual, formal, and partywear dresses, jeans, tops, T-",
      "shirts , skirts, and more, Meesho has all the latest trending outfits you're looking for--plus funky jewelry and accessories. You'll never have to worry about overspending or not being",
      "able to find something you love!",
    ],
    highlight: ["T-", "shirts"],
  },
  {
    title: "Home Utility and Essentials",
    text: [
      "It's always a good idea to switch up your home's style every now and then - it keeps things fresh and also allows you to try out new trends. But of course, you never want to spend",
      "more money than you have to. That's where Meesho comes in! We've got amazing prices on all kinds of home furnishing items like bedsheets , curtains , cushions , and more. Plus, we",
      "have a constantly rotating selection of the best home decor items so you can always stay on top of the latest trends. So be sure to check out our home decor section today!",
    ],
    highlight: ["bedsheets", "curtains", "cushions"],
  },
  {
    title: "Men's Ethnic Wear",
    text: [
      "Do you need a new Sherwani? Are you heading to a wedding and want to look your best? If you answered yes, look no further than our latest men’s ethnic wear collection! Whether",
      "you want a Kurta set, Pajamas, Sherwani set, or any other Indian attire, we have an array of budget-friendly styles that are sure to fit your needs.",
    ],
  },
];
// Hidden Footer
function HiddenFooter({ array }) {
  console.log(array);
  return (
    <div className="HiddenFooterCont">
      {array.map((item, ind) => (
        <div className="HiddenFooterCards" key={item + Math.random() * 10}>
          <h1>{item.title}</h1>
          {item.text.map((item) => (
            <p key={Math.random() * 100}>{item}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

// Main Footer Function
function Footer() {
  const [showMoreFooter, setshowMoreFooter] = useState(true);

  const handleMoreFooterClick = () => {
    setshowMoreFooter((prev) => !prev);
  };

  return (
    <div className="FooterOuterCont">
      <div className="InnerFooterCont">
        {/* More About MeShop Div */}
        <div onClick={handleMoreFooterClick} className="MoreAboutMeShopDiv">
          <h1>More About MeShop</h1>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            iconSize="28"
            class="sc-gswNZR hKmskQ"
            style={{
              transform: showMoreFooter ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path
              d="m14.161 7.31-4.166 4.125-4.167-4.124a1.075 1.075 0 0 0-1.514 0 1.051 1.051 0 0 0 0 1.499l4.929 4.88a1.077 1.077 0 0 0 1.514 0l4.929-4.88a1.051 1.051 0 0 0 0-1.5 1.1 1.1 0 0 0-1.525 0Z"
              fill="#666"
            ></path>
          </svg>
        </div>

        {/* Hidden Footer */}
        {showMoreFooter && <HiddenFooter array={HiddenFooterContent} />}
      </div>
    </div>
  );
}
export default Footer;
