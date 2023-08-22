import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { StyledButton } from "./ShareInfoButton.style";

const ShareInfoButton = ({ children, disabled, ...props }) => {
  return (
    <>
      <StyledButton
        variant="contained"
        color="primary"
        disabled={disabled}
        {...props}
      >
        {children} <AddCircleOutlineIcon />
      </StyledButton>
    </>
  );
};

export default ShareInfoButton;
