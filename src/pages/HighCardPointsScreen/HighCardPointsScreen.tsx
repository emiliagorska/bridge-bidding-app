import React, { useState } from "react";
// @ts-expect-error TS(6142): Module '../../components/Dropdown/Dropdown' was re... Remove this comment to see the full error message
import Dropdown from "../../components/Dropdown/Dropdown";
// @ts-expect-error TS(6142): Module '../../components/Buttons/ActionButton/Acti... Remove this comment to see the full error message
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { StyledDiv } from "./HighCardPointsScreen.style";
// @ts-expect-error TS(6142): Module '../../components/Headings/HeadingWithSubhe... Remove this comment to see the full error message
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
// @ts-expect-error TS(6142): Module '../../InformationContext' was resolved to ... Remove this comment to see the full error message
import { useInformation, useInformationDispatch } from "../../InformationContext";
import { useNavigate } from "react-router-dom";
// @ts-expect-error TS(6142): Module '../../components/FooterWrapper/FooterWrapp... Remove this comment to see the full error message
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

const HighCardPointsScreen = () => {
  const [highCardPoints, setHighCardPoints] = useState(0);
  const navigate = useNavigate();

  const bids = useInformation();
  const dispatchInformation = useInformationDispatch();

  const HCPValues = [];
  for (let i = 0; i <= 37; i++) {
    HCPValues.push(i);
  }

  const handleChange = (e: any) => {
    setHighCardPoints(e.target.value);
  };
  const actionObject = {
    type: "added",
    typeOfInformation: "High Card Points",
    details: highCardPoints,
  };
  const onSubmit = () => {
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    if (bids.length === 0) {
      // @ts-expect-error TS(2721): Cannot invoke an object which is possibly 'null'.
      dispatchInformation(actionObject);
      navigate("/first-info-shared");
    } else {
      // @ts-expect-error TS(2721): Cannot invoke an object which is possibly 'null'.
      dispatchInformation(actionObject);
      navigate("/both-info-shared");
    }
  };
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StyledDiv>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <HeadingWithSubheading
          heading="High Card Points:"
          marginTop="20px"
          marginBottom="16px"
        >
          Count how many points you have in your hand (4 for each ace, 3 for
          each king, 2 for each queen, 1 for each jack)
        </HeadingWithSubheading>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Dropdown
          label="High Card Points"
          values={HCPValues}
          handleChange={handleChange}
        ></Dropdown>
      </StyledDiv>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FooterWrapper>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ActionButton onClick={onSubmit}>
          Confirm
        </ActionButton>
      </FooterWrapper>
    </>
  );
};

export default HighCardPointsScreen;
