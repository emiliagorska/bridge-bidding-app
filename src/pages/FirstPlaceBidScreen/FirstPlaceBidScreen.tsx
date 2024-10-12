import React, { useState } from "react";
// @ts-expect-error TS(6142): Module '../../components/Buttons/ActionButton/Acti... Remove this comment to see the full error message
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
// @ts-expect-error TS(6142): Module '../../InformationContext' was resolved to ... Remove this comment to see the full error message
import { useInformation } from "../../InformationContext";
// @ts-expect-error TS(6142): Module '../../components/FooterWrapper/FooterWrapp... Remove this comment to see the full error message
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";
import { useNavigate } from "react-router-dom";
// @ts-expect-error TS(6142): Module '../../components/Headings/Heading/Heading'... Remove this comment to see the full error message
import Heading from "../../components/Headings/Heading/Heading";
// @ts-expect-error TS(6142): Module '../../components/Buttons/OptionButton/Opti... Remove this comment to see the full error message
import OptionButton from "../../components/Buttons/OptionButton/OptionButton";
// @ts-expect-error TS(6142): Module '../../components/Buttons/SmallOptionButton... Remove this comment to see the full error message
import SmallOptionButton from "../../components/Buttons/SmallOptionButton/SmallOptionButton";
// @ts-expect-error TS(6142): Module '../../components/Headings/HeadingWithSubhe... Remove this comment to see the full error message
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
// @ts-expect-error TS(6142): Module '../../components/Dropdown/Dropdown' was re... Remove this comment to see the full error message
import Dropdown from "../../components/Dropdown/Dropdown";
import {
  BidButtonsContainer,
  DropdownsContainer,
} from "./FirstPlaceBidScreen.style";
// @ts-expect-error TS(6142): Module '../../BiddingContext' was resolved to '/Us... Remove this comment to see the full error message
import { useBiddingDispatch } from "../../BiddingContext";
// @ts-expect-error TS(6142): Module '../../components/PrimaryTextBox/PrimaryTex... Remove this comment to see the full error message
import PrimaryTextBox from "../../components/PrimaryTextBox/PrimaryTextBox";

const FirstPlaceBidScreen = () => {
  const navigate = useNavigate();
  const bids = useInformation();
  const dispatchBids = useBiddingDispatch();

  const [numberOfCards, setNumberOfCards] = useState("0");
  const [trump, setTrump] = useState("NT");
  const [bid, setBid] = useState("");

  const trumpsForDropdown = [
    //FIND BETTER WAY TO DISPLAY SUITS
    "NT",
    String.fromCharCode(0x2660),
    String.fromCharCode(0x2665),
    String.fromCharCode(0x2666),
    String.fromCharCode(0x2663),
  ];

  const numbersForDropdown = [];
  for (let i = 1; i <= 7; i++) {
    numbersForDropdown.push(i);
  }

  const actionObject = {
    type: "added",
    bid: bid,
  };

  const handleTrumpChange = (e: any) => {
    setTrump(e.target.value);
    setBid(`${numberOfCards} ${e.target.value}`);
  };

  const handleNumberChange = (e: any) => {
    setNumberOfCards(e.target.value);
    setBid(`${e.target.value} ${trump}`);
  };

  const onNewGame = () => {
    // @ts-expect-error TS(2721): Cannot invoke an object which is possibly 'null'.
    dispatchBids({ type: "clearedAll" });
    navigate("/");
  };

  //FIGURE THIS OUT
  const findPrimaryColor = () => {
    if (bid === "PASS") {
      return "#12a582";
    } else if (bid === "DOUBLE") {
      return "#ff3b30";
    } else if (bid === "REDOUBLE") {
      return "#3380ef";
    }
  };

  const handleButtonChange = (e: any) => {
    console.log("BUTTON CLICKED:", e.currentTarget.value);
    e.target.focus();
    setBid(e.currentTarget.value);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <HeadingWithSubheading
        marginTop="8px"
        marginBottom="8px"
        heading="Select your bid:"
      ></HeadingWithSubheading>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <BidButtonsContainer>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SmallOptionButton
          marginBottom="8px"
          onClick={handleButtonChange}
          value="PASS"
          color="#12a582"
        >
          PASS
        </SmallOptionButton>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SmallOptionButton
          marginBottom="8px"
          onClick={handleButtonChange}
          value="DOUBLE"
          color="#ff3b30"
        >
          DOUBLE
        </SmallOptionButton>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SmallOptionButton
          marginBottom="8px"
          onClick={handleButtonChange}
          value="REDOUBLE"
          color="#3380ef"
        >
          REDOUBLE
        </SmallOptionButton>
      </BidButtonsContainer>
      {/* <Text marginTop="8px" marginBottom="8px">
        OR: Select how many tricks you think you can win:
      </Text> */}
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <DropdownsContainer>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Dropdown
          label="Number of cards"
          values={numbersForDropdown}
          handleChange={handleNumberChange}
        />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Dropdown
          label="Trump"
          values={trumpsForDropdown}
          handleChange={handleTrumpChange}
        />
      </DropdownsContainer>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <PrimaryTextBox
        marginTop="32px"
        marginBottom="16px"
        dontShowPlusIcon
        borderStyle="3px solid #12a582"
      >
        {bid}
      </PrimaryTextBox>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FooterWrapper>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ActionButton onClick={onNewGame}>New Game</ActionButton>
      </FooterWrapper>
    </>
  );
};

export default FirstPlaceBidScreen;
