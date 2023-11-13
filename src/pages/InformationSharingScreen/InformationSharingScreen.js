import React from "react";
import Heading from "../../components/Headings/Heading/Heading";
import OptionButton from "../../components/Buttons/OptionButton/OptionButton";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";

const InformationSharingScreen = () => {
  return (
    <>
      <Heading marginTop="8px" marginBottom="8px">
        Which information would you like to share?
      </Heading>
      <OptionButton heading="1. High Card Points" marginBottom="8px">
        Points calculated from your aces, kings, queens and jacks
      </OptionButton>
      <OptionButton heading="2. Card Distribution" marginBottom="8px">
        How many cards you have in each color, in descending order
      </OptionButton>
      <OptionButton heading="3. # of cards in one color" marginBottom="8px">
        How many cards you have in a single color
      </OptionButton>
      <ActionButton marginTop="16px">Confirm</ActionButton>
    </>
  );
};

export default InformationSharingScreen;
