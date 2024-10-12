import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { StyledButton, StyledContentBox } from "./PrimaryTextBox.style";

const PrimaryTextBox = ({
  children,
  dontShowPlusIcon,
  ...props
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StyledButton {...props}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <StyledContentBox {...props}>
          {children}
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          {!dontShowPlusIcon && <AddCircleIcon color="primary" />}
        </StyledContentBox>
      </StyledButton>
    </>
  );
};

export default PrimaryTextBox;
