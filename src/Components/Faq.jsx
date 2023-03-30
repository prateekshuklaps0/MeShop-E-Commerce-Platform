// Main Function
import "../ComponentsCSS/Faq.css";
import { NavLink, Navigate, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

// Image Imports
// Google Play and App Store Images
import GPStoreImg from "../Images/StoreButtons/GPButton.jpg";
import AppStoreImg from "../Images/StoreButtons/APButton.jpg";
// Social Handle Logos
import FaqFaceBookIcon from "../Images/FaqsImages/FaqFaceBookIcon.png";
import FaqInstaIcon from "../Images/FaqsImages/FaqInstaIcon.png";
import FaqYouTubeIcon from "../Images/FaqsImages/FaqYouTubeIcon.png";
import FaqLinkedInIcon from "../Images/FaqsImages/FaqLinkedInIcon.png";
import FaqTwitterIcon from "../Images/FaqsImages/FaqTwitterIcon.png";

function Faq() {
  return (
    <div className="FaqCont">
      <div className="FaqChildCont">
        {/* Shop On MeShop */}
        <div className="ShopOnMeshopCont">
          <h1>Shop Non-Stop on MeShop</h1>
          <p>Trusted by more than 1 Crore Indians</p>
          <p>Cash on Delivery | Free Delivery</p>
          <div className="appStoreHolderCont">
            <img src={GPStoreImg} alt="Google Store Button"></img>
            <img src={AppStoreImg} alt="Apple Store Button"></img>
          </div>
        </div>

        {/* Careers */}
        <div className="CareesAndLegalCont">
          <p className="CareerAndLegalPTag">Careers</p>
          <p className="CareerAndLegalPTag">Become a supplier</p>
          <p className="CareerAndLegalPTag">Hall of Fame</p>
        </div>

        {/* Legal */}
        <div className="CareesAndLegalCont">
          <p className="CareerAndLegalPTag">Legal and Policies</p>
          <p className="CareerAndLegalPTag">MeShop Tech Blog</p>
          <p className="CareerAndLegalPTag">Notices and Returns</p>
        </div>

        {/* Social */}
        <div className="SocialCont">
          <h1 className="ReachAndContactUsH1Tag">Reach out to us</h1>
          <div className="SocialIconsCont">
            <img src={FaqFaceBookIcon} alt="FB Icon"></img>
            <img src={FaqInstaIcon} alt="Insta Icon"></img>
            <img src={FaqYouTubeIcon} alt="YouTube Icon"></img>
            <img src={FaqLinkedInIcon} alt="LinkedIn Icon"></img>
            <img src={FaqTwitterIcon} alt="Twitter Icon"></img>
          </div>
        </div>

        {/* Contact Us */}
        <div className="ContactUsCont">
          <h1 className="ReachAndContactUsH1Tag">Contact Us</h1>
          <p className="PTagContactUs">Fashnear Technologies Private</p>
          <p className="PTagContactUs">Limited,</p>
          <p className="PTagContactUs">CIN: U74900KA2015PTC082263</p>
          <p className="PTagContactUs">06-105-B, 06-102, (138 Wu)</p>
          <p className="PTagContactUs">Vaishnavi Signature, No. 78/9, Outer</p>
          <p className="PTagContactUs">Ring Road, Bellandur, Varthur Hobli,</p>
          <p className="PTagContactUs">Bengaluru-560103, Karnataka, India</p>
          <p className="PTagContactUs">E-mail address:</p>
          <p className="PTagContactUs">query@meshop.com</p>
          <p className="PTagContactUs">© 2015-2022 MeShop.com</p>
        </div>
      </div>
    </div>
  );
}
export default Faq;
