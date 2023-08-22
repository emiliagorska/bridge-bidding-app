import React from "react";
import "./ActionButton.css";
import { Button } from "react-bootstrap";

const ActionButton = ({ children, marginBottom }) => {
  return (
    <>
      <Button
        variant="success"
        className="actionButton"
        style={{ marginBottom: marginBottom }}
      >
        {children}
      </Button>
    </>
  );
};

export default ActionButton;
