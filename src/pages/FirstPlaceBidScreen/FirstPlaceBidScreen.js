import React, { useState } from "react";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { useInformation } from "../../InformationContext";
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Headings/Heading/Heading";
import OptionButton from "../../components/Buttons/OptionButton/OptionButton";
import SmallOptionButton from "../../components/Buttons/SmallOptionButton/SmallOptionButton";
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
import Dropdown from "../../components/Dropdown/Dropdown";
import {
  BidButtonsContainer,
  DropdownsContainer,
} from "./FirstPlaceBidScreen.style";
import { useBiddingDispatch } from "../../BiddingContext";
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
import PrimaryTextBox from "../../components/PrimaryTextBox/PrimaryTextBox";

const FirstPlaceBidScreen = () => {
  const navigate = useNavigate();
  const bids = useInformation();
  const dispatchBids = useBiddingDispatch();

  const [numberOfCards, setNumberOfCards] = useState("0");
  const [trump, setTrump] = useState("NT");
  const [bid, setBid] = useState("");
  const [displayedBid, setDisplayedBid] = useState("");

  const trumpsForDropdown = [
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

  const handleTrumpChange = (e) => {
    setTrump(e.target.value);
    setBid(`${numberOfCards} ${e.target.value}`);
  };

  const handleNumberChange = (e) => {
    setNumberOfCards(e.target.value);
    setBid(`${e.target.value} ${trump}`);
  };

  const onNewGame = () => {
    dispatchBids({ type: "clearedAll" });
    navigate("/");
  };

  const onPlaceBid = () => {
    setDisplayedBid(bid);
    console.log("BID FROM ONPLACEBID:", bid);
    dispatchBids(actionObject);
  };

  const findPrimaryColor = () => {
    if (bid === "PASS") {
      return "#12a582";
    } else if (bid === "DOUBLE") {
      return "#ff3b30";
    } else if (bid === "REDOUBLE") {
      return "#3380ef";
    }
  };

  const handleButtonChange = (e) => {
    console.log("BUTTON CLICKED:", e.currentTarget.value);
    e.target.focus();
    setBid(e.currentTarget.value);
  };

  return (
    <>
      <HeadingWithSubheading
        marginTop="8px"
        marginBottom="8px"
        heading="Select your bid:"
      ></HeadingWithSubheading>
      <BidButtonsContainer>
        <SmallOptionButton
          marginBottom="8px"
          onClick={handleButtonChange}
          value="PASS"
          color="#12a582"
        >
          PASS
        </SmallOptionButton>
        <SmallOptionButton
          marginBottom="8px"
          onClick={handleButtonChange}
          value="DOUBLE"
          color="#ff3b30"
        >
          DOUBLE
        </SmallOptionButton>
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
      <DropdownsContainer>
        <Dropdown
          label="Number of cards"
          values={numbersForDropdown}
          handleChange={handleNumberChange}
        />
        <Dropdown
          label="Trump"
          values={trumpsForDropdown}
          handleChange={handleTrumpChange}
        />
      </DropdownsContainer>
      <PrimaryTextBox
        marginTop="32px"
        marginBottom="16px"
        dontShowPlusIcon
        borderStyle="3px solid #12a582"
      >
        {bid}
      </PrimaryTextBox>
      <FooterWrapper>
        <ActionButton onClick={onNewGame}>New Game</ActionButton>
      </FooterWrapper>
    </>
  );
};

export default FirstPlaceBidScreen;
