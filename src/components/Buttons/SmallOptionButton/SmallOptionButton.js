import React from "react";
import {
  StyledContent,
  StyledHeading,
  StyledSmallOptionButton,
} from "./SmallOptionButton.styles";

const SmallOptionButton = ({ heading, children, ...props }) => {
  return (
    <>
      <StyledSmallOptionButton color="primary" variant="outlined" {...props}>
        {heading && <StyledHeading>{heading}</StyledHeading>}
        <StyledContent>{children}</StyledContent>
      </StyledSmallOptionButton>
    </>
  );
};

export default SmallOptionButton;
