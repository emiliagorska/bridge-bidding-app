import React from "react";
import { StyledActionButtonsContainer } from "./FooterWrapper.styles";

const FooterWrapper = ({
  children
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StyledActionButtonsContainer>{children}</StyledActionButtonsContainer>
    </>
  );
};

export default FooterWrapper;
