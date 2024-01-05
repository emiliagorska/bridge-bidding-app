import React, { useContext, useEffect, useState } from "react";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import CardDistribution from "../../components/CardDistribution/CardDistribution";
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
import ErrorContainer from "../../components/ErrorContainer/ErrorContainer";
import { useBidding, useBiddingDispatch } from "../../BiddingContext";
import { useNavigate } from "react-router-dom";

const CardDistributionScreen = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [cardDistribution, setCardDistribution] = useState();

  const bids = useBidding();
  const dispatchBids = useBiddingDispatch();

  const handleDistributionChange = (distribution) => {
    setCardDistribution(distribution);
  };

  const actionObject = {
    type: "added",
    typeOfInformation: "Card Distribution",
    details: cardDistribution,
  };
  const onSubmit = () => {
    if (bids.length === 0) {
      dispatchBids(actionObject);
      navigate("/first-info-shared");
    } else {
      dispatchBids(actionObject);
      navigate("/both-info-shared");
    }
  };

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
      <CardDistribution
        handleError={setError}
        handleDistributionChange={(distribution) =>
          handleDistributionChange(distribution)
        }
      />
      {error && <ErrorContainer>{errorMessage}</ErrorContainer>}
      <ActionButton disabled={error} marginTop="8px" onClick={onSubmit}>
        Confirm
      </ActionButton>
    </>
  );
};

export default CardDistributionScreen;
