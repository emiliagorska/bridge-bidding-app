import React from "react";
import { ErrorBox, ErrorMessage } from "./ErrorContainer.style";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const ErrorContainer = ({
  children,
  ...props
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ErrorBox>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PriorityHighIcon color="error" />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ErrorMessage>{children}</ErrorMessage>
    </ErrorBox>
  );
};

export default ErrorContainer;
