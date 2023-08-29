import React, { useState } from "react";
import { StyledDiv, StyledTextField } from "./CardDistribution.style";

const CardDistribution = ({ children, ...props }) => {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [thirdNumber, setThirdNumber] = useState();
  const [forthNumber, setForthNumber] = useState();
  const [message, setMessage] = useState();
  console.log("first number:", firstNumber);

  if (
    !(firstNumber >= secondNumber) ||
    !(secondNumber >= thirdNumber) ||
    !(thirdNumber >= forthNumber) ||
    !(firstNumber + secondNumber + thirdNumber + forthNumber === 13)
  ) {
    // setMessage(
    //   "Please make sure you've entered the numbers in descending order and that their sum is 13 (the total number of your cards"
    // );
  }
  return (
    <>
      <StyledDiv>
        <StyledTextField
          id="outlined-basic"
          variant="outlined"
          onChange={(e) => setFirstNumber(e.target.value)}
        ></StyledTextField>
        <StyledTextField
          id="outlined-basic"
          variant="outlined"
        ></StyledTextField>
        <StyledTextField
          id="outlined-basic"
          variant="outlined"
        ></StyledTextField>
        <StyledTextField
          id="outlined-basic"
          variant="outlined"
        ></StyledTextField>
      </StyledDiv>
    </>
  );
};

export default CardDistribution;
