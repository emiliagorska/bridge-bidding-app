import React from "react";
import {
  StyledActionButtonsContainer,
  StyledFixedBottomContainer,
} from "./FooterWrapper.styles";

const FooterWrapper = ({ children }) => {
  return (
    <>
      <StyledFixedBottomContainer>
        <StyledActionButtonsContainer>{children}</StyledActionButtonsContainer>
      </StyledFixedBottomContainer>
    </>
  );
};

export default FooterWrapper;
