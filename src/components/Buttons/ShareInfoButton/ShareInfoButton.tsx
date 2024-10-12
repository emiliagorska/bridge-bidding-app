import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  StyledButton,
  StyledContentBox,
  // @ts-expect-error TS(2305): Module '"./ShareInfoButton.style"' has no exported... Remove this comment to see the full error message
  StyledParagraph,
} from "./ShareInfoButton.style";

const ShareInfoButton = ({
  children,
  showPlusIcon,
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
          {showPlusIcon && <AddCircleIcon color="primary" />}
        </StyledContentBox>
      </StyledButton>
    </>
  );
};

export default ShareInfoButton;
