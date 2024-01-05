import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  StyledButton,
  StyledContentBox,
  StyledParagraph,
} from "./ShareInfoButton.style";

const ShareInfoButton = ({ children, dontShowPlusIcon, ...props }) => {
  return (
    <>
      <StyledButton variant="outlined" color="primary" {...props}>
        <StyledContentBox {...props}>
          {children}
          {!dontShowPlusIcon && <AddCircleIcon color="primary" />}
        </StyledContentBox>
      </StyledButton>
    </>
  );
};

export default ShareInfoButton;
