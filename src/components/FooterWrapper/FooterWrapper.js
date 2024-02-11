import React from "react";
import { StyledActionButtonsContainer } from "./FooterWrapper.styles";

const FooterWrapper = ({ children }) => {
  return (
    <>
      <StyledActionButtonsContainer>{children}</StyledActionButtonsContainer>
    </>
  );
};

export default FooterWrapper;
