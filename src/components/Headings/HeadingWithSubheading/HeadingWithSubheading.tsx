import React from "react";
import {
  StyledContainer,
  StyledHeading,
  StyledSubheading,
} from "./HeadingWithSubheading.style";

const HeadingWithSubheading = ({
  children,
  heading,
  ...props
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StyledContainer {...props}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <StyledHeading {...props}>{heading}</StyledHeading>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {children && <StyledSubheading {...props}>{children}</StyledSubheading>}
      </StyledContainer>
    </>
  );
};

export default HeadingWithSubheading;
