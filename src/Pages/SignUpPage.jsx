import "../ComponentsCSS/SignUpPage.css";
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
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  Box,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const isLogin = true;

function SignUpPage() {
  const [SwapLoading, setSwapLoading] = useState(false);
  useEffect(() => {
    setSwapLoading(true);
    setTimeout(() => {
      setSwapLoading((prev) => false);
    }, 1000);
  }, []);

  document.title = `meShop | SignUp`;
  return (
    <div>
      {SwapLoading ? (
        <h1>Loading</h1>
      ) : (
        <ScaleFade initialScale={0.9} in={!SwapLoading}>
          <Box w={10} p="40px" color="white" mt="4" rounded="md" shadow="md">
            Loaded
          </Box>
        </ScaleFade>
      )}
    </div>
  );
}
export { SignUpPage, isLogin };
