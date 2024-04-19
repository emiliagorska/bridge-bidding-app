import React, { useEffect, useState } from "react";
import {
  ErrorContainer,
  ErrorMessage,
  StyledDiv,
  StyledTextField,
} from "./CardDistribution.style";


const CardDistribution = ({
  children,
  handleError,
  handleDistributionChange,
  ...props
}) => {
  const [numbersArray, setNumbersArray] = useState([0, 0, 0, 0]);
  const [error, setError] = useState(true);

  useEffect(() => {
    var sumOfNumbers = numbersArray.reduce(function (a, b) {
      return parseInt(a) + parseInt(b);
    });
    if (sumOfNumbers !== 13) {
      handleError(true);
      return setError(true);
    }
    for (let i = 1; i < 4; i++) {
      if (numbersArray[i] > numbersArray[i - 1] || numbersArray[i] < 0) {
        handleError(true);
        return setError(true);
      } else {
        handleError(false);
        setError(false);
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
