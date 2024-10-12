import React, { useState } from "react";
// @ts-expect-error TS(6142): Module '../../components/Buttons/ActionButton/Acti... Remove this comment to see the full error message
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
// @ts-expect-error TS(6142): Module '../../components/CardDistribution/CardDist... Remove this comment to see the full error message
import CardDistribution from "../../components/CardDistribution/CardDistribution";
// @ts-expect-error TS(6142): Module '../../components/Headings/HeadingWithSubhe... Remove this comment to see the full error message
import HeadingWithSubheading from "../../components/Headings/HeadingWithSubheading/HeadingWithSubheading";
// @ts-expect-error TS(6142): Module '../../components/ErrorContainer/ErrorConta... Remove this comment to see the full error message
import ErrorContainer from "../../components/ErrorContainer/ErrorContainer";
import {
  useInformation,
  useInformationDispatch,
// @ts-expect-error TS(6142): Module '../../InformationContext' was resolved to ... Remove this comment to see the full error message
} from "../../InformationContext";
import { useNavigate } from "react-router-dom";
// @ts-expect-error TS(6142): Module '../../components/FooterWrapper/FooterWrapp... Remove this comment to see the full error message
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

const CardDistributionScreen = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [cardDistribution, setCardDistribution] = useState();

  const bids = useInformation();
  const dispatchInformation = useInformationDispatch();

  const handleDistributionChange = (distribution: any) => {
    setCardDistribution(distribution);
  };

  const actionObject = {
    type: "added",
    typeOfInformation: "Card Distribution",
    details: cardDistribution,
  };
  const onSubmit = () => {
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    if (bids.length === 0) {
      // @ts-expect-error TS(2721): Cannot invoke an object which is possibly 'null'.
      dispatchInformation(actionObject);
      navigate("/first-info-shared");
    } else {
      // @ts-expect-error TS(2721): Cannot invoke an object which is possibly 'null'.
      dispatchInformation(actionObject);
      navigate("/both-info-shared");
    }
  };

  const errorMessage =
    "Please make sure you entered the numbers in descending order and that their sum is 13 (the number of all the cards you should have)!";
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <HeadingWithSubheading
      heading="Card Distribution:"
      marginTop="20px"
      marginBottom="16px"
    >
      Count how many cards you have in each of the 4 suits. Type the numbers,
      starting from the highest and ending with the lowest.
    </HeadingWithSubheading>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <CardDistribution
      handleError={setError}
      handleDistributionChange={(distribution: any) => handleDistributionChange(distribution)
      }
    />
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <FooterWrapper>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {error && <ErrorContainer>{errorMessage}</ErrorContainer>}
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ActionButton disabled={error} marginTop="8px" onClick={onSubmit}>
        Confirm
      </ActionButton>
    </FooterWrapper>
  </>;
};

export default CardDistributionScreen;
