import React, { useEffect, useState } from "react";
import { StyledDiv, StyledTextField } from "./CardDistribution.style";

const CardDistribution = ({
  handleError,
  handleDistributionChange
}: any) => {
  const [numbersArray, setNumbersArray] = useState([0, 0, 0, 0]);

  useEffect(() => {
    var sumOfNumbers = numbersArray.reduce(function (a, b) {
      // @ts-expect-error TS(2345): Argument of type 'number' is not assignable to par... Remove this comment to see the full error message
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

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return (<>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <StyledDiv>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <StyledTextField onChange={(e) => setNumbersArray((numbersArray as any).with(0, e.target.value))}></StyledTextField>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <StyledTextField onChange={(e) => setNumbersArray((numbersArray as any).with(1, e.target.value))}></StyledTextField>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <StyledTextField onChange={(e) => setNumbersArray((numbersArray as any).with(2, e.target.value))}></StyledTextField>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <StyledTextField onChange={(e) => setNumbersArray((numbersArray as any).with(3, e.target.value))}></StyledTextField>
      </StyledDiv>
    </>);
};

export default CardDistribution;
