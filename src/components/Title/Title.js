import React from "react";
import { StyledTitle } from "./Title.styles";

const Title = ({ children, ...props }) => {
  return (
    <>
      <StyledTitle color="ternary" {...props}>
        Bidding stage
      </StyledTitle>
    </>
  );
};

export default Title;
