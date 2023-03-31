import NavBar from "../Components/NavBar";
import HeadsHomePage from "../Components/HeadsHomePage";
import { HomePageProduct, GenerateCards } from "../Components/HomePageProduct";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";

function Landing() {
  document.title = `Online Shopping Site for Fashion, Electronics, Home and More | meShop`;
  return (
    <div>
      {/* <NavBar /> */}
      <HeadsHomePage />
      <HomePageProduct />
      <Faq />
      <Footer />
    </div>
  );
}

export default Landing;
