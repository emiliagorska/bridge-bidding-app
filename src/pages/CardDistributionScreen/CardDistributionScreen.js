import React, { useContext, useEffect, useState } from "react";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import CardDistribution from "../../components/CardDistribution/CardDistribution";
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
import ErrorContainer from "../../components/ErrorContainer/ErrorContainer";
import {
  BiddingContext,
  BiddingDispatchContext,
  useBidding,
  useBiddingDispatch,
} from "../../BiddingContext";

const CardDistributionScreen = () => {
  const [error, setError] = useState();
  const bidding = useBidding();
  const dispatch = useBiddingDispatch();
  //IN SUBMIT:
  //  dispatch({
  //   type: 'added',
  //   id: nextId++,
  //   text: text,
  // });

  const handleOnClick = () => {
    dispatch({
      type: "added",
      id: "id",
      information: "Dispatch works!!",
      details: "Details",
    });
  };

  console.log(bidding);

  const errorMessage =
    "Please make sure you entered the numbers in descending order and that their sum is 13 (the number of all the cards you should have)!";
  return (
    <>
      <HeadingWithSubheading
        heading="Card Distribution:"
        marginTop="20px"
        marginBottom="16px"
      >
        Count how many cards you have in each of the 4 colours. Type the
        numbers, starting from the highest and ending with the lowest.
      </HeadingWithSubheading>
      <CardDistribution handleError={setError} />
      {error && <ErrorContainer>{errorMessage}</ErrorContainer>}
      <ActionButton disabled={error} marginTop="8px" onClick={handleOnClick}>
        Confirm
      </ActionButton>
    </>
  );
};

export default CardDistributionScreen;
