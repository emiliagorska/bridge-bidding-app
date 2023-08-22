import React from "react";
import { StyledOptionButton } from "./OptionButton.styles";

const OptionButton = ({ children, ...props }) => {
  return (
    <>
      <StyledOptionButton color="primary" variant="contained" {...props}>
        {children}
      </StyledOptionButton>
    </>
  );
};

export default OptionButton;
