import React, { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
import { useInformation, useInformationDispatch } from "../../InformationContext";
import { useNavigate } from "react-router-dom";
import { DropdownsContainer } from "./NumberOfCardsScreen.style";
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

  const handlesuitChange = (e) => {
    setsuit(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumberOfCards(e.target.value);
  };
  const actionObject = {
    type: "added",
    typeOfInformation: "Number Of Cards",
    details: `${numberOfCards} in ${suit}`,
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
      <HeadingWithSubheading
        heading="Number of cards in a chosen suit:"
        marginTop="20px"
        marginBottom="16px"
      >
        Select suit you want to share information on. Then, select how many
        cards you have in this suit.
      </HeadingWithSubheading>
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
        <ActionButton onClick={onSubmit}>
          Confirm
        </ActionButton>
      </FooterWrapper>
    </>
  );
};

export default NumberOfCardsScreen;
