import React, { useState } from "react";
import Heading from "../../components/Heading/Heading";
import Dropdown from "../../components/Dropdown/Dropdown";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { StyledActionButton, StyledDiv } from "./HighCardPointsScreen.style";

const HighCardPointsScreen = () => {
  const [highCardPoints, setHighCardPoints] = useState("");

  const handleChange = (e) => {
    setHighCardPoints(e.target.value);
  };
  return (
    <StyledDiv>
      <Heading marginTop="20px" marginBottom="32px">
        <b> High Card Points:</b> <br></br>Count how many points you have in
        your hand (4 for each ace, 3 for each king, 2 for each queen, 1 for each
        valet)
      </Heading>
      <Dropdown handleChange={handleChange} value={highCardPoints}></Dropdown>
      <ActionButton marginTop="150px">
        <b>Confirm</b>
      </ActionButton>
    </StyledDiv>
  );
};

export default HighCardPointsScreen;
