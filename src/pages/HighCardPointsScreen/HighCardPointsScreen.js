import React, { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { StyledDiv } from "./HighCardPointsScreen.style";
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
import { useInformation, useInformationDispatch } from "../../InformationContext";
import { useNavigate } from "react-router-dom";
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

const HighCardPointsScreen = () => {
  const [highCardPoints, setHighCardPoints] = useState("");
  const navigate = useNavigate();

  const bids = useInformation();
  const dispatchInformation = useInformationDispatch();

  const HCPValues = [];
  for (let i = 0; i <= 37; i++) {
    HCPValues.push(i);
  }

  const handleChange = (e) => {
    setHighCardPoints(e.target.value);
  };
  const actionObject = {
    type: "added",
    typeOfInformation: "High Card Points",
    details: highCardPoints,
  };
  const onSubmit = () => {
    if (bids.length === 0) {
      dispatchInformation(actionObject);
      navigate("/first-info-shared");
    } else {
      dispatchInformation(actionObject);
      navigate("/both-info-shared");
    }
  };
  return (
    <>
      <StyledDiv>
        <HeadingWithSubheading
          heading="High Card Points:"
          marginTop="20px"
          marginBottom="16px"
        >
          Count how many points you have in your hand (4 for each ace, 3 for
          each king, 2 for each queen, 1 for each jack)
        </HeadingWithSubheading>
        <Dropdown
          label="High Card Points"
          values={HCPValues}
          handleChange={handleChange}
        ></Dropdown>
      </StyledDiv>
      <FooterWrapper>
        <ActionButton marginTop="150px" onClick={onSubmit}>
          <b>Confirm</b>
        </ActionButton>
      </FooterWrapper>
    </>
  );
};

export default HighCardPointsScreen;
