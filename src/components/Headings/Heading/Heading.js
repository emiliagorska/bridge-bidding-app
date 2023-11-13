import React from "react";
import { StyledHeading } from "./Heading.styles";

const Heading = ({ children, ...props }) => {
  return (
    <>
      <StyledHeading {...props}>{children}</StyledHeading>
    </>
  );
};

export default Heading;
