import React from "react";
import { StyledButton } from "./ActionButton.styles";

const ActionButton = ({ children, disabled, ...props }) => {
  return (
    <>
      <StyledButton disabled={disabled} {...props}>
        {" "}
        {children}
      </StyledButton>
    </>
  );
};

export default ActionButton;
