import React from "react";
import {
  StyledContent,
  StyledHeading,
  StyledSmallOptionButton,
} from "./SmallOptionButton.styles";

const SmallOptionButton = ({ heading, children, ...props }) => {
  return (
    <>
      <StyledSmallOptionButton {...props} tabindex="0">
        {children}
      </StyledSmallOptionButton>
    </>
  );
};

export default SmallOptionButton;
