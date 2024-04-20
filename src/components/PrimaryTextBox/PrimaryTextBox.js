import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { StyledButton, StyledContentBox } from "./PrimaryTextBox.style";

const PrimaryTextBox = ({ children, dontShowPlusIcon, ...props }) => {
  return (
    <>
      <StyledButton {...props}>
        <StyledContentBox {...props}>
          {children}
          {!dontShowPlusIcon && <AddCircleIcon color="primary" />}
        </StyledContentBox>
      </StyledButton>
    </>
  );
};

export default PrimaryTextBox;
