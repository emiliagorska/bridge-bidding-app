import React from "react";
import { StyledTitle } from "./Title.styles";

const Title = ({ children, ...props }) => {
  return (
    <>
      <StyledTitle color="ternary" {...props}>
        {children}
      </StyledTitle>
    </>
  );
};

export default Title;
