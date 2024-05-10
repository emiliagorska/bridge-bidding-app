import React from "react";
import { StyledSmallOptionButton } from "./SmallOptionButton.styles";

const SmallOptionButton = ({ heading, children, ...props }) => {
  return (
    <>
      <StyledSmallOptionButton {...props}>{children}</StyledSmallOptionButton>
    </>
  );
};

export default SmallOptionButton;
