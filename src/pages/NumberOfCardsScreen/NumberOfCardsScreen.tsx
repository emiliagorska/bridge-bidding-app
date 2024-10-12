import React, { useState } from "react";
// @ts-expect-error TS(6142): Module '../../components/Dropdown/Dropdown' was re... Remove this comment to see the full error message
import Dropdown from "../../components/Dropdown/Dropdown";
// @ts-expect-error TS(6142): Module '../../components/Buttons/ActionButton/Acti... Remove this comment to see the full error message
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
// @ts-expect-error TS(6142): Module '../../components/Headings/HeadingWithSubhe... Remove this comment to see the full error message
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
// @ts-expect-error TS(6142): Module '../../InformationContext' was resolved to ... Remove this comment to see the full error message
import { useInformation, useInformationDispatch } from "../../InformationContext";
import { useNavigate } from "react-router-dom";
import { DropdownsContainer } from "./NumberOfCardsScreen.style";
// @ts-expect-error TS(6142): Module '../../components/FooterWrapper/FooterWrapp... Remove this comment to see the full error message
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

const NumberOfCardsScreen = () => {
  const [numberOfCards, setNumberOfCards] = useState("0");
  const [suit, setsuit] = useState(String.fromCharCode(0x2660));
  const navigate = useNavigate();

  const bids = useInformation();
  const dispatchInformation = useInformationDispatch();

  const suitsForDropdown = [
    //research how to make these icons prettier
    String.fromCharCode(0x2660),
    String.fromCharCode(0x2665),
    String.fromCharCode(0x2666),
    String.fromCharCode(0x2663),
  ];

  const numbersForDropdown = [];
  for (let i = 0; i <= 13; i++) {
    numbersForDropdown.push(i);
  }

  const handlesuitChange = (e: any) => {
    setsuit(e.target.value);
  };

  const handleNumberChange = (e: any) => {
    setNumberOfCards(e.target.value);
  };
  const actionObject = {
    type: "added",
    typeOfInformation: "Number Of Cards",
    details: `${numberOfCards} in ${suit}`,
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
      <HeadingWithSubheading
        heading="Number of cards in a chosen suit:"
        marginTop="20px"
        marginBottom="16px"
      >
        Select suit you want to share information on. Then, select how many
        cards you have in this suit.
      </HeadingWithSubheading>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DropdownsContainer>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Dropdown
          label="suit"
          values={suitsForDropdown}
          handleChange={handlesuitChange}
        ></Dropdown>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Dropdown
          label="Number of cards"
          values={numbersForDropdown}
          handleChange={handleNumberChange}
        ></Dropdown>
      </DropdownsContainer>
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

export default NumberOfCardsScreen;
