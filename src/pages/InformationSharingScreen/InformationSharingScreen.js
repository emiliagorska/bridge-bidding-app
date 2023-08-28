import React from "react";
import Heading from "../../components/Heading/Heading";
import OptionButton from "../../components/Buttons/OptionButton/OptionButton";

const InformationSharingScreen = () => {
  return (
    <>
      <Heading marginTop="20px" marginBottom="32px">
        <b>Which information would you like to share?</b>
      </Heading>
      <OptionButton marginBottom="8px">1. High Card Points</OptionButton>
      <OptionButton marginBottom="8px">
        2. Card Distribution - how many cards you have in a single colour
      </OptionButton>
      <OptionButton marginBottom="8px">
        3. Number of cards in one colour
      </OptionButton>
    </>
  );
};

export default InformationSharingScreen;
