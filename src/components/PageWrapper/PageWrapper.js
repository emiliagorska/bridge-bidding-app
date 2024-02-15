import React from "react";
import "./PageWrapper.styles.js";
import Title from "../../components/Title/Title";
import { ComponentsContainer, PageContainer } from "./PageWrapper.styles.js";

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
