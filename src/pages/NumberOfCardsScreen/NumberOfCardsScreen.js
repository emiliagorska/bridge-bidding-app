import React, { useState } from "react";
import Heading from "../../components/Headings/Heading/Heading";
import Dropdown from "../../components/Dropdown/Dropdown";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
import { useBidding, useBiddingDispatch } from "../../BiddingContext";
import { useNavigate } from "react-router-dom";
import { DropdownsContainer, StyledDiv } from "./NumberOfCardsScreen.style";

const NumberOfCardsScreen = () => {
  const [numberOfCards, setNumberOfCards] = useState("");
  const [colour, setColour] = useState(String.fromCharCode(0x2660));
  const navigate = useNavigate();

  const bids = useBidding();
  const dispatchBids = useBiddingDispatch();

  const coloursForDropdown = [
    String.fromCharCode(0x2660),
    String.fromCharCode(0x2665),
    String.fromCharCode(0x2666),
    String.fromCharCode(0x2663),
  ];
  const numbersForDropdown = [];
  for (let i = 0; i <= 13; i++) {
    numbersForDropdown.push(i);
  }

  const handleColourChange = (e) => {
    setColour(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumberOfCards(e.target.value);
  };
  const actionObject = {
    type: "added",
    typeOfInformation: "Number Of Cards",
    details: `${numberOfCards} in ${colour}`,
  };
  const onSubmit = () => {
    if (bids.length === 0) {
      dispatchBids(actionObject);
      navigate("/first-info-shared");
    } else {
      dispatchBids(actionObject);
      navigate("/both-info-shared");
    }
  };
  return (
    <StyledDiv>
      <HeadingWithSubheading
        heading="Number of cards in a chosen colour:"
        marginTop="20px"
        marginBottom="16px"
      >
        Select colour you want to share information on. Then, select how many
        cards you have in this colour.
      </HeadingWithSubheading>
      <DropdownsContainer>
        <Dropdown
          label="Colour"
          values={coloursForDropdown}
          handleChange={handleColourChange}
        ></Dropdown>
        <Dropdown
          label="Number of cards"
          values={numbersForDropdown}
          handleChange={handleNumberChange}
        ></Dropdown>
      </DropdownsContainer>
      <ActionButton marginTop="150px" onClick={onSubmit}>
        <b>Confirm</b>
      </ActionButton>
    </StyledDiv>
  );
};

export default NumberOfCardsScreen;
