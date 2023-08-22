import React from "react";
import "./PageWrapper.css";
import Title from "../../components/Title/Title";

const PageWrapper = ({ children }) => {
  return (
    <div className="pageContainer">
      <div className="componentsContainer">
        <Title marginTop="8px">Bidding stage</Title>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
