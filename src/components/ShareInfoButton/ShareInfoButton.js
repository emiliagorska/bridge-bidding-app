import React from "react";
import Button from "react-bootstrap/Button";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./ShareInfoButton.css";
import VariantsExample from "./ShareInfoButton.style";

const ShareInfoButton = ({ children, marginBottom }) => {
  return (
    <>
      <Button
        variant="outline-success"
        className="shareInfoButton"
        style={{ marginBottom: marginBottom }}
      >
        {children}
      </Button>
    </>
  );
};

export default ShareInfoButton;
