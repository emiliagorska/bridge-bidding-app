import React from "react";
import { StyledHeading } from "./Heading.styles";

const Heading = ({ children, ...props }) => {
  return (
    <>
      <>
        <StyledHeading color="primary" {...props}>
          {children}
        </StyledHeading>
      </>
    </>
  );
};

export default Heading;
