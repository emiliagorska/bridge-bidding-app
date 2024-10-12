import React from "react";
import { StyledText } from "./Text.style";

const Text = ({
  children,
  ...props
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StyledText {...props}>{children}</StyledText>
    </>
  );
};

export default Text;
