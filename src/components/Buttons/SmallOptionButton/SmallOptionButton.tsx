import React from "react";
import { StyledSmallOptionButton } from "./SmallOptionButton.styles";

const SmallOptionButton = ({
  heading,
  children,
  ...props
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StyledSmallOptionButton {...props} tabindex="0">
        {children}
      </StyledSmallOptionButton>
    </>
  );
};

export default SmallOptionButton;
