import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  StyledButton,
  StyledContentBox,
  StyledParagraph,
} from "./ShareInfoButton.style";

const ShareInfoButton = ({
  children,
  disabled,
  dontShowPlusIcon,
  ...props
}) => {
  return (
    <>
      <StyledButton
        variant="outlined"
        color="primary"
        disabled={disabled}
        {...props}
      >
        <StyledContentBox>
          {children}
          {!dontShowPlusIcon && <AddCircleIcon color="primary" />}
        </StyledContentBox>
      </StyledButton>
    </>
  );
};

export default ShareInfoButton;
