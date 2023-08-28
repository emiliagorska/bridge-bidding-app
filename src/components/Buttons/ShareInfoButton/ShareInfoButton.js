import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { StyledButton } from "./ShareInfoButton.style";

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
        {children} {!dontShowPlusIcon && <AddCircleOutlineIcon />}
      </StyledButton>
    </>
  );
};

export default ShareInfoButton;
