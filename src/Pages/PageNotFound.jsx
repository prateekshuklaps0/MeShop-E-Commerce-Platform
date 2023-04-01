import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

function PageNotFound() {
  document.title = `meShop | Page Not Found`;
  return (
    <div>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Page Not Found</AlertTitle>
        <AlertDescription>Lets Search for it together.</AlertDescription>
      </Alert>
      <img
        src="https://i.imgflip.com/1zg1jt.jpg"
        style={{ margin: "auto", marginTop: "100px" }}
      />
    </div>
  );
}
export default PageNotFound;
