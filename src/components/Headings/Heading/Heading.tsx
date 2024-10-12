import React from "react";
import { StyledHeading } from "./Heading.styles";

const Heading = ({
  children,
  ...props
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StyledHeading {...props}>{children}</StyledHeading>
    </>
  );
};

export default Heading;
