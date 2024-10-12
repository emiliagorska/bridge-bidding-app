import React from "react";
import { ErrorBox, ErrorMessage } from "./ErrorContainer.style";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const ErrorContainer = ({ children, ...props }) => {
  return (
    <ErrorBox>
      <PriorityHighIcon color="error" />
      <ErrorMessage>{children}</ErrorMessage>
    </ErrorBox>
  );
};

export default ErrorContainer;
