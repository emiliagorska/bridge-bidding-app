import React from "react";
import { StyledButton } from "./ActionButton.styles";

const ActionButton = ({ children, ...props }) => {
  return (
    <>
      <StyledButton color="primary" variant="contained" {...props}>
        {children}
      </StyledButton>
    </>
  );
};

export default ActionButton;
