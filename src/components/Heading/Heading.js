import React from "react";

const Heading = ({ children, marginBottom, marginTop }) => {
  return (
    <>
      <div
        className="shareInfoButton"
        style={{ marginBottom: marginBottom, marginTop: marginTop }}
      >
        <h2>{children}</h2>
      </div>
    </>
  );
};

export default Heading;
