import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  StyledButton,
  StyledContentBox,
  StyledParagraph,
} from "./ShareInfoButton.style";

const ShareInfoButton = ({ children, showPlusIcon, ...props }) => {
  return (
    <>
      <StyledButton {...props}>
        <StyledContentBox {...props}>
          {children}
          {showPlusIcon && <AddCircleIcon color="primary" />}
        </StyledContentBox>
      </StyledButton>
    </>
  );
};

export default ShareInfoButton;
