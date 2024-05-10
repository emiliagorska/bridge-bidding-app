import React, { useEffect, useState } from "react";
import { StyledDiv, StyledTextField } from "./CardDistribution.style";

const CardDistribution = ({ handleError, handleDistributionChange }) => {
  const [numbersArray, setNumbersArray] = useState([0, 0, 0, 0]);

  useEffect(() => {
    var sumOfNumbers = numbersArray.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
    });
    if (sumOfNumbers !== 13) {
      return handleError(true);
    }
    for (let i = 1; i < 4; i++) {
      if (numbersArray[i] > numbersArray[i - 1] || numbersArray[i] < 0) {
        return handleError(true);
      } else {
        handleError(false);
        handleDistributionChange(numbersArray);
      }
    }
  }, [numbersArray]);

  return (
    <>
      <StyledDiv>
        <StyledTextField
          onChange={(e) =>
            setNumbersArray(numbersArray.with(0, e.target.value))
          }
        ></StyledTextField>
        <StyledTextField
          onChange={(e) =>
            setNumbersArray(numbersArray.with(1, e.target.value))
          }
        ></StyledTextField>
        <StyledTextField
          onChange={(e) =>
            setNumbersArray(numbersArray.with(2, e.target.value))
          }
        ></StyledTextField>
        <StyledTextField
          onChange={(e) =>
            setNumbersArray(numbersArray.with(3, e.target.value))
          }
        ></StyledTextField>
      </StyledDiv>
    </>
  );
};

export default CardDistribution;
