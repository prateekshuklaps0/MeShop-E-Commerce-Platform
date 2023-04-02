import "../ComponentsCSS/SignUpPage.css";
import { SetLogOut } from "../Components/NavBar";
import { NavLink, Navigate, Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import OTPInput from "react-otp-input";
// Image Imports
import GPStoreImg from "../Images/StoreButtons/GPButton.jpg";
import AppStoreImg from "../Images/StoreButtons/APButton.jpg";
import SignUpIMG from "../Images/SignUpPage/SignUpPage.webp";
// ********************
import {
  Spinner,
  Checkbox,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CheckboxGroup,
  useToast,
  Button,
  ButtonGroup,
  Radio,
  RadioGroup,
  Accordion,
  AccordionItem,
  PinInput,
  PinInputField,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  CircularProgress,
  CircularProgressLabel,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Skeleton,
  Box,
  Progress,
  Input,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

// OTP Generator
function generateOTP() {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

// **************************

const AnimatedSkeleton = () => {
  return (
    <div className="animatedDiv">
      <h1 className="meshopAnimated">meShop</h1>
      <Skeleton
        startColor="blue.500"
        endColor="grey.500"
        height="100vh"
      ></Skeleton>
    </div>
  );
};

// Nav2 Function
const NavType2 = () => {
  // Empty NavBar Search Content
  const DefaultSearchTitles = [
    "saree",
    "smartwatch",
    "kurti",
    "tshirt",
    "watch",
    "lehenga",
    "top",
    "shoes",
    "jeans",
    "jewellery",
  ];
  function EmptyNavSearchContent() {
    return (
      <>
        <h1>Popular Searches</h1>

        <div className="titleHolderDiv firstDefaultCont">
          {DefaultSearchTitles.slice(0, 3).map((item, ind) => {
            return (
              <NavLink
                to="/"
                key={item[0] + ind}
                className="defaultNavSearchtitles"
              >
                {item}
              </NavLink>
            );
          })}
        </div>

        <div className="titleHolderDiv secondDefaultCont">
          {DefaultSearchTitles.slice(3, 7).map((item, ind) => {
            return (
              <NavLink
                to="/"
                key={item[0] + ind}
                className="defaultNavSearchtitles"
              >
                {item}
              </NavLink>
            );
          })}
        </div>

        <div className="titleHolderDiv threeDefaultCont">
          {DefaultSearchTitles.slice(7, 10).map((item, ind) => {
            return (
              <NavLink
                to="/"
                key={item[0] + ind}
                className="defaultNavSearchtitles"
              >
                {item}
              </NavLink>
            );
          })}
        </div>
      </>
    );
  }
  // ********************
  // Nav Bar Search Input
  const navSearchInpRef = useRef(null);
  const formRef = useRef(null);
  const [navSearchValue, setnavSearchValue] = useState("");
  const [searchPopUpDiv, setsearchPopUpDiv] = useState(false);
  const [SwapLoading, setSwapLoading] = useState(false);
  useEffect(() => {
    setSwapLoading(true);
    setTimeout(() => {
      setSwapLoading((prev) => false);
    }, 1000);
  }, []);
  const triggerNavSearchInp = () => {
    navSearchInpRef.current.focus();
    setsearchPopUpDiv(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setsearchPopUpDiv(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavSearch = (event) => {
    setnavSearchValue(event.target.value);
  };

  const clearNavSearchText = () => {
    setnavSearchValue("");
  };
  //   *******************************

  // Download App PopUp
  const navigateToApricot = () => {
    window.open("https://apricot-prateek.netlify.app/", "_blank");
  };
  const navigateToGithub = () => {
    window.open(
      "https://github.com/prateekshuklaps0/impolite-support-6582",
      "_blank"
    );
  };

  const [showdownload, setshowdownload] = useState(false);
  const handleShowdownload = () => {
    setshowdownload(true);
  };
  const handleHidedownload = () => {
    setshowdownload(false);
  };
  const DownloadAppPopUp = () => {
    return (
      <div
        style={showdownload ? { display: "inline" } : { display: "none" }}
        className="dropdownMenus downloadCont NAV2dropdown"
      >
        <h1>Download From a</h1>
        <img
          onClick={navigateToGithub}
          className="GPStoreImg"
          src={GPStoreImg}
          alt="Go To Google Play Store"
        ></img>
        <img
          onClick={navigateToApricot}
          className="ApStoreImg"
          src={AppStoreImg}
          alt="Go To App Store"
        ></img>
      </div>
    );
  };
  //   *******************************

  return (
    <div className="NAV2Container">
      <div className="upperNaV">
        {/* Upper Nav Left Elements */}
        <div className="upperNav_left">
          <Link to="/" className="meshopLogo">
            meShop
          </Link>
          {/* Search Form */}
          <form
            className="navSearchForm"
            onClick={triggerNavSearchInp}
            ref={formRef}
            action="#"
            method="get"
          >
            {/* Search Button in Nav Bar */}
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
            {/* Search Input in Nav Bar */}
            <input
              type="text"
              placeholder="Try Saree, Kurti or Search by Products Code"
              ref={navSearchInpRef}
              value={navSearchValue}
              onChange={handleNavSearch}
            />
            {/* Clear Nav Search */}
            {navSearchValue && (
              <button type="button" onClick={clearNavSearchText}>
                X
              </button>
            )}
            {/* Nav Search PopUp Dropdown */}
            {searchPopUpDiv && (
              <div
                style={{
                  position: "absolute",
                  top: "58px",
                  left: "232px",
                }}
                className="searchPopup dropdownMenus NAV2dropdown"
                onClick={() => setsearchPopUpDiv(true)}
              >
                {!navSearchValue ? (
                  <EmptyNavSearchContent />
                ) : (
                  <h1>{navSearchValue}</h1>
                )}
              </div>
            )}
          </form>
        </div>

        {/* Upper Nav Right Elements */}
        <div className="upperNav_right NAV2RightCont">
          {/* Download App Element */}
          <div
            onMouseEnter={handleShowdownload}
            onMouseLeave={handleHidedownload}
            className="navTop_right_conts download_app"
          >
            <svg
              viewBox="0 0 16 24"
              xmlns="http://www.w3.org/2000/svg"
              mr="8"
              class="sc-gswNZR fEPKVe hover"
              iconSize="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.16 1.872h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488ZM2.672 5.335v11.469h10.656V5.335H2.672Zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 0 1-1.488-1.488ZM.8 3.36A3.36 3.36 0 0 1 4.16 0h7.68a3.36 3.36 0 0 1 3.36 3.36v17.28A3.36 3.36 0 0 1 11.84 24H4.16A3.36 3.36 0 0 1 .8 20.64V3.36Zm6 16.447a.6.6 0 0 0 0 1.2h2.4a.6.6 0 1 0 0-1.2H6.8Z"
                fill="#333"
              ></path>
            </svg>
            <p>Download App</p>
            {<DownloadAppPopUp />}
          </div>

          {/* Become a Supplier Element */}
          <div className="navTop_right_conts supplierCont ">
            <p>Become a Supplier</p>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      {SwapLoading && (
        <Progress className="NavProgress" size="xs" isIndeterminate />
      )}
    </div>
  );
};
// *******************************

// SignUp Container
function SignUpContent() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const toast = useToast();
  const [showInputLable, setShowInputLabel] = useState(false); // To Show Phone Number Text above Phone Number Entered

  const [showOTPDiv, setShowOTPDiv] = useState(false); // To Show OTP Area

  const [switchOtpField, setswitchOtpField] = useState(false); // To animate the switch

  const [mobileNum, setMobileNum] = useState(""); // To get Mobile Number User Entered

  const [generatedOTP, setgeneratedOTP] = useState(0); // To set the Otp Generated by Otp Generate Function

  const [resendOTP, setresendOTP] = useState(false); // To Resend the Otp

  const [EnteredOTP, setEnteredOTP] = useState(""); // To get Otp User has entered

  const [InvalidMobile, setInvalidMobile] = useState(false); //

  // Function To Toggle Number Input Label
  const handleInputClick = () => {
    setShowInputLabel((prev) => !prev);
  };
  //******************* */

  // Function to handle Phone Number Entered
  const handlePhoneInputChange = (e) => {
    const EnteredMobile = e.target.value;
    if (EnteredMobile.length <= 10) {
      setMobileNum((prev) => EnteredMobile);
    }
  };
  // **********************

  // Mobile Number Submit Funcion
  const MobileNumSubmit = () => {
    if (mobileNum.length < 10) {
      // Invalid Mobile Entered Alert
      toast({
        title: `Enter Valid Phone Number`,
        status: "warning",
        isClosable: true,
      });
    } else {
      // OTP Sent Alert
      toast({
        title: `OTP Sent`,
        status: "success",
        isClosable: true,
      });
      // Generate OTP
      setgeneratedOTP((prev) => {
        prev = generateOTP();
        // Show OTP Recieved Alert
        toast({
          title: `New Message! Your OTP for MeShop login is ${prev}`,
          // status: "success",
          position: "top-right",
          isClosable: true,
        });
        // Set Resend OTP Value to generated OTP value
        setresendOTP((val) => prev);
      });
      // Show OTP ENTER Field
      setShowOTPDiv((prev) => !prev);
    }
  };
  // *********************

  // Function to handle Otp Entered
  const handleOTPChange = (e) => {
    setEnteredOTP((prev) => e.target.value);
  };
  // **************************

  // OnChange Number Click
  const changeNumberClicked = () => {
    // To show back SignUp Field
    setShowOTPDiv((prev) => !prev);
    // To Clear the Previous Number Entered
    setMobileNum((prev) => "");
  };
  // *********************

  // Resend OTP
  const ResendOTP = () => {
    toast({
      title: `New Message! Your OTP for MeShop login is ${resendOTP}`,
      position: "top-right",
      isClosable: true,
    });
  };
  // ******************************

  // Function to Verify OTP
  const Verify = () => {
    if (EnteredOTP == resendOTP) {
      toast({
        title: `LogIn Successfull`,
        position: "top",
        status: "success",
        isClosable: true,
      });
      login();
      navigate("/");
      return null;
    } else {
      toast({
        title: `Enter The Correct OTP`,
        status: "error",
        position: "top",
        isClosable: true,
      });
    }
  };
  // *********************

  // SignUp to Otp Field Switch Animation
  useEffect(() => {
    setswitchOtpField((prev) => true);

    setTimeout(() => {
      setswitchOtpField((prev) => false);
    }, 800);
  }, [showOTPDiv]);

  // *****************************

  return (
    <div className="SignUpAndOTPContainer">
      {/* <button onClick={() => setShowOTPDiv((prev) => !prev)}>Toggle</button> */}
      <ScaleFade in={true}>
        <div className="SignUpCont">
          <img src={SignUpIMG} />
          {!showOTPDiv ? (
            <div className="SignUpAndOtpForm SignUpForm">
              <ScaleFade in={true}>
                <h1>Sign Up to view your profile</h1>
                <div className="PhoneCont">
                  <div className="countryCont">
                    <p>Country</p>
                    <h2>
                      <span>IN</span> +91
                    </h2>
                  </div>
                  <div className="countryCont">
                    {showInputLable && (
                      <p id="PhoneNumberInputLabel">Phone Number</p>
                    )}

                    <Input
                      type="number"
                      variant="unstyled"
                      placeholder="Phone Number"
                      value={mobileNum}
                      onClick={handleInputClick}
                      onChange={(e) => handlePhoneInputChange(e)}
                    />
                  </div>
                </div>
                <Button
                  className="ContinueButton"
                  onClick={MobileNumSubmit}
                  colorScheme="pink"
                  variant="solid"
                >
                  Continue
                </Button>
              </ScaleFade>
            </div>
          ) : switchOtpField ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="pink.500"
              size="xl"
              marginTop="100px"
            />
          ) : (
            <ScaleFade in={showOTPDiv}>
              <div className="SignUpAndOtpForm OtpForm">
                <h1>Enter OTP sent to {mobileNum}</h1>
                <h6 onClick={changeNumberClicked}>CHANGE NUMBER</h6>
                <div className="OTPBOX">
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    value={EnteredOTP}
                    onChange={handleOTPChange}
                    maxLength={6}
                    pattern="\d*"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                  />
                </div>
                <h6 onClick={ResendOTP}>RESEND OTP</h6>
                <Button
                  onClick={Verify}
                  className="ContinueButton"
                  colorScheme="pink"
                  variant="solid"
                >
                  Verify
                </Button>
              </div>
            </ScaleFade>
          )}
          <div className="SignUpTerCondCont">
            <h2 className="termconduppertext">
              By continuing, you agree to Meesho's{" "}
            </h2>
            <h5 className="termcondlowertext">
              <span className="termcondspantext">Terms & Conditions</span> and{" "}
              <span className="termcondspantext">Privacy Policy</span>
            </h5>
          </div>
        </div>
      </ScaleFade>
    </div>
  );
}
// *******************************

function SignUpPage() {
  const [SwapLoading, setSwapLoading] = useState(false);
  useEffect(() => {
    setSwapLoading(true);
    setTimeout(() => {
      setSwapLoading((prev) => false);
    }, 800);
  }, []);
  document.title = `meShop | SignUp`;
  return (
    <div>
      {SwapLoading ? (
        <AnimatedSkeleton />
      ) : (
        <div>
          <NavType2 />
          <SignUpContent />
        </div>
      )}
    </div>
  );
}
{
  /*  <ScaleFade initialScale={0.9} in={!SwapLoading}>
         <Box w={10} p="40px" color="white" mt="4" rounded="md" shadow="md">
            Loaded
           </Box>
         </ScaleFade> */
}
export { SignUpPage, AnimatedSkeleton, NavType2, SignUpContent };
