import React, { useState } from "react";
import Heading from "../../components/Heading/Heading";
import Dropdown from "../../components/Dropdown/Dropdown";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import CardDistribution from "../../components/CardDistribution/CardDistribution";

const CardDistributionScreen = () => {
  return (
    <>
      <Heading marginTop="20px" marginBottom="32px">
        <b> Card Distribution</b> <br></br>Count how many cards you have in each
        of the 4 colours. Type the numbers, starting from the highest and ending
        with the lowest.
      </Heading>
      <CardDistribution />
      <ActionButton marginTop="150px">
        <b>Confirm</b>
      </ActionButton>
    </>
  );
};

export default CardDistributionScreen;
