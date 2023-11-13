import React from "react";
import {
  StyledContent,
  StyledDiv,
  StyledHeading,
  StyledOptionButton,
} from "./OptionButton.styles";

const OptionButton = ({ heading, children, ...props }) => {
  return (
    <>
      <StyledOptionButton color="primary" variant="outlined" {...props}>
        <StyledDiv>
          <StyledHeading>{heading}</StyledHeading>
          <StyledContent>{children}</StyledContent>
        </StyledDiv>
      </StyledOptionButton>
    </>
  );
};

export default OptionButton;
