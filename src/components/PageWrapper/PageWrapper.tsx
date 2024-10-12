import React from "react";
import "./PageWrapper.styles.js";
import { ComponentsContainer, PageContainer, Title } from "./PageWrapper.styles.js";

const PageWrapper = ({ children }) => {
  return (
    <PageContainer>
      <ComponentsContainer>
        <Title marginTop="8px">Bridge bidding lite</Title>
        {children}
      </ComponentsContainer>
    </PageContainer>
  );
};

export default PageWrapper;
