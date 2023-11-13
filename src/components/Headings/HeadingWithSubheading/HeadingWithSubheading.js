import React from "react";
import {
  StyledContainer,
  StyledHeading,
  StyledSubheading,
} from "./HeadingWithSubheading.style";

const HeadingWithSubheading = ({ children, heading, ...props }) => {
  return (
    <>
      <StyledContainer {...props}>
        <StyledHeading {...props}>{heading}</StyledHeading>
        <StyledSubheading {...props}>{children}</StyledSubheading>
      </StyledContainer>
    </>
  );
};

export default HeadingWithSubheading;
