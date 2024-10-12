import React from "react";
import { StyledButton } from "./ActionButton.styles";

const ActionButton = ({
  children,
  disabled,
  ...props
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StyledButton disabled={disabled} {...props}>
        {" "}
        {children}
      </StyledButton>
    </>
  );
};

export default ActionButton;
