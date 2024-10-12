import React from "react";
import {
  StyledDiv,
  StyledHeading,
  StyledPanel,
} from "./MobileOnlyInformationPanel.styles";

const MobileOnlyInformationPanel = ({
  heading,
  children,
  ...props
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StyledPanel {...props}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <StyledDiv>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <StyledHeading>{heading}</StyledHeading>
        </StyledDiv>
      </StyledPanel>
    </>
  );
};

export default MobileOnlyInformationPanel;
