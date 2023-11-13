import React, { useState } from "react";
import Heading from "../../components/Headings/Heading/Heading";
import Dropdown from "../../components/Dropdown/Dropdown";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { StyledDiv } from "./HighCardPointsScreen.style";
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";

const HighCardPointsScreen = () => {
  const [highCardPoints, setHighCardPoints] = useState("");

  const handleChange = (e) => {
    setHighCardPoints(e.target.value);
  };
  return (
    <StyledDiv>
      <HeadingWithSubheading
        heading="High Card Points:"
        marginTop="20px"
        marginBottom="16px"
      >
        Count how many points you have in your hand (4 for each ace, 3 for each
        king, 2 for each queen, 1 for each valet)
      </HeadingWithSubheading>
      <Dropdown handleChange={handleChange} value={highCardPoints}></Dropdown>
      <ActionButton marginTop="150px">
        <b>Confirm</b>
      </ActionButton>
    </StyledDiv>
  );
};

export default HighCardPointsScreen;
