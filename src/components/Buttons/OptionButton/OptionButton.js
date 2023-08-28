import React from "react";
import { StyledOptionButton } from "./OptionButton.styles";

const OptionButton = ({ children, ...props }) => {
  return (
    <>
      <StyledOptionButton color="primary" variant="outlined" {...props}>
        {children}
      </StyledOptionButton>
    </>
  );
};

export default OptionButton;
