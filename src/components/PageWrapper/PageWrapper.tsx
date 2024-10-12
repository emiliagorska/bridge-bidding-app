import React from "react";
import "./PageWrapper.styles.js";
import { ComponentsContainer, PageContainer, Title } from "./PageWrapper.styles.js";

const PageWrapper = ({
  children
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <PageContainer>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ComponentsContainer>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Title marginTop="8px">Bridge bidding lite</Title>
        {children}
      </ComponentsContainer>
    </PageContainer>
  );
};

export default PageWrapper;
