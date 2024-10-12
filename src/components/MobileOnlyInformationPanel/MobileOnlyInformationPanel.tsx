import React from "react";
import {
  StyledDiv,
  StyledHeading,
  StyledPanel,
} from "./MobileOnlyInformationPanel.styles";

const MobileOnlyInformationPanel = ({ heading, children, ...props }) => {
  return (
    <>
      <StyledPanel {...props}>
        <StyledDiv>
          <StyledHeading>{heading}</StyledHeading>
        </StyledDiv>
      </StyledPanel>
    </>
  );
};

export default MobileOnlyInformationPanel;
