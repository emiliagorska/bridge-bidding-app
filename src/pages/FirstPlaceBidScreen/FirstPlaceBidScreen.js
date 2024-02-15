import React, { useState } from "react";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { useBidding, useBiddingDispatch } from "../../BiddingContext";
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Headings/Heading/Heading";
import OptionButton from "../../components/Buttons/OptionButton/OptionButton";
import SmallOptionButton from "../../components/Buttons/SmallOptionButton/SmallOptionButton";
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
import Text from "../../components/Text/Text";
import Dropdown from "../../components/Dropdown/Dropdown";
import { DropdownsContainer } from "./FirstPlaceBidScreen.style";

const FirstPlaceBidScreen = () => {
  const navigate = useNavigate();
  const bids = useBidding();
  const dispatchBids = useBiddingDispatch();

  const [numberOfCards, setNumberOfCards] = useState("NO SUIT");
  const [suit, setsuit] = useState(String.fromCharCode(0x2660));

  const suitsForDropdown = [
    "NO SUIT",
    String.fromCharCode(0x2660),
    String.fromCharCode(0x2665),
    String.fromCharCode(0x2666),
    String.fromCharCode(0x2663),
  ];

  const numbersForDropdown = [];
  for (let i = 0; i <= 7; i++) {
    numbersForDropdown.push(i);
  }

  const handlesuitChange = (e) => {
    setsuit(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumberOfCards(e.target.value);
  };

  const onNewGame = () => {
    dispatchBids({ type: "clearedAll" });
    navigate("/");
  };

  const onPlaceBid = () => {
    navigate("/place-bid/first-screen");
  };

  return (
    <>
      <HeadingWithSubheading
        marginTop="8px"
        marginBottom="8px"
        heading="Select your bid:"
      ></HeadingWithSubheading>
      <SmallOptionButton>PASS</SmallOptionButton>
      {/* <Text marginTop="8px" marginBottom="8px">
        OR: Select how many tricks you think you can win:
      </Text> */}
      <DropdownsContainer>
        <Dropdown
          label="suit"
          values={suitsForDropdown}
          handleChange={handlesuitChange}
        ></Dropdown>
        <Dropdown
          label="Number of cards"
          values={numbersForDropdown}
          handleChange={handleNumberChange}
        ></Dropdown>
      </DropdownsContainer>
      <FooterWrapper>
        <ActionButton marginBottom="8px" onClick={onPlaceBid}>
          Next Bid
        </ActionButton>
        <ActionButton onClick={onNewGame}>New Game</ActionButton>
      </FooterWrapper>
    </>
  );
};

export default FirstPlaceBidScreen;
