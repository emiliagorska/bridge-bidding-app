import React from "react";
import { StyledTitle } from "./Title.styles";

const Title = ({ children, ...props }) => {
  return (
    <>
      <StyledTitle color="primary" {...props}>
        Bidding stage
      </StyledTitle>
    </>
  );
};

export default Title;
