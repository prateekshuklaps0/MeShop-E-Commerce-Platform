import { NavBar } from "../Components/NavBar";
import HeadsHomePage from "../Components/HeadsHomePage";
import { HomePageProduct, GenerateCards } from "../Components/HomePageProduct";
import { AnimatedSkeleton } from "./SignUpPage";
import { useState, useRef, useEffect } from "react";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";
import { Progress } from "@chakra-ui/react";
import AuthContext from "../Contexts/AuthContext";
import { NavLink, Navigate, Link, useParams } from "react-router-dom";

function Landing() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn((prev) => true);
  };

  const logout = () => {
    setIsLoggedIn((prev) => false);
  };

  const [SwapLoading, setSwapLoading] = useState(false);
  useEffect(() => {
    setSwapLoading(true);
    setTimeout(() => {
      setSwapLoading((prev) => false);
    }, 800);
  }, []);

  document.title = `Online Shopping Site for Fashion, Electronics, Home and More | meShop`;
  return (
    <div>
      {SwapLoading ? (
        <AnimatedSkeleton />
      ) : (
        <div>
          <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            <NavBar />
            <HeadsHomePage />
            <HomePageProduct />
            <Faq />
            <Footer />
          </AuthContext.Provider>
        </div>
      )}
    </div>
  );
}

export default Landing;
