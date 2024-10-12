import React from "react";
import {
  StyledContent,
  StyledDiv,
  StyledHeading,
  StyledOptionButton,
} from "./OptionButton.styles";

const OptionButton = ({
  heading,
  children,
  ...props
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StyledOptionButton {...props}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <StyledDiv>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <StyledHeading>{heading}</StyledHeading>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <StyledContent>{children}</StyledContent>
        </StyledDiv>
      </StyledOptionButton>
    </>
  );
};

export default OptionButton;
