import React, { useContext, useEffect, useState } from "react";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import CardDistribution from "../../components/CardDistribution/CardDistribution";
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
import ErrorContainer from "../../components/ErrorContainer/ErrorContainer";
import { useInformation, useInformationDispatch } from "../../InformationContext";
import { useNavigate } from "react-router-dom";
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

const CardDistributionScreen = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [cardDistribution, setCardDistribution] = useState();

  const bids = useInformation();
  const dispatchInformation = useInformationDispatch();

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
      dispatchInformation(actionObject);
      navigate("/first-info-shared");
    } else {
      dispatchInformation(actionObject);
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
        Count how many cards you have in each of the 4 suits. Type the numbers,
        starting from the highest and ending with the lowest.
      </HeadingWithSubheading>
      <CardDistribution
        handleError={setError}
        handleDistributionChange={(distribution) =>
          handleDistributionChange(distribution)
        }
      />
      <FooterWrapper>
        {error && <ErrorContainer>{errorMessage}</ErrorContainer>}
        <ActionButton disabled={error} marginTop="8px" onClick={onSubmit}>
          Confirm
        </ActionButton>
      </FooterWrapper>
    </>
  );
};

export default CardDistributionScreen;
