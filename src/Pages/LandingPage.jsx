import NavBar from "../Components/NavBar";
import HeadsHomePage from "../Components/HeadsHomePage";

function Landing() {
  document.title = `Online Shopping Site for Fashion, Electronics, Home and More | meShop`;
  return (
    <div>
      {/* <NavBar /> */}
      <HeadsHomePage />
    </div>
  );
}

export default Landing;
