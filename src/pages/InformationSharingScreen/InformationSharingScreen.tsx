import React from "react";
// @ts-expect-error TS(6142): Module '../../components/Headings/Heading/Heading'... Remove this comment to see the full error message
import Heading from "../../components/Headings/Heading/Heading";
// @ts-expect-error TS(6142): Module '../../components/Buttons/OptionButton/Opti... Remove this comment to see the full error message
import OptionButton from "../../components/Buttons/OptionButton/OptionButton";
// @ts-expect-error TS(6142): Module '../../components/Buttons/ActionButton/Acti... Remove this comment to see the full error message
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
// @ts-expect-error TS(6142): Module '../../InformationContext' was resolved to ... Remove this comment to see the full error message
import { useInformation } from "../../InformationContext";
// @ts-expect-error TS(6142): Module '../../components/FooterWrapper/FooterWrapp... Remove this comment to see the full error message
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

const InformationSharingScreen = () => {
  const navigate = useNavigate();
  const context = useInformation();
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Heading marginTop="8px" marginBottom="8px">
        Which information would you like to share?
      </Heading>
      {/* @ts-expect-error TS(2531): Object is possibly 'null'. */}
      {!(context[0]?.typeOfInformation === "High Card Points") &&
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        !(context[1]?.typeOfInformation === "High Card Points") && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <OptionButton
            heading="1. High Card Points"
            marginBottom="8px"
            onClick={() => navigate("/high-card-points")}
          >
            Points calculated from your aces, kings, queens and jacks
          </OptionButton>
        )}
      {/* @ts-expect-error TS(2531): Object is possibly 'null'. */}
      {!(context[0]?.typeOfInformation === "Card Distribution") &&
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        !(context[1]?.typeOfInformation === "Card Distribution") && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <OptionButton
            heading="2. Card Distribution"
            marginBottom="8px"
            onClick={() => navigate("/card-distribution")}
          >
            How many cards you have in each color, in descending order
          </OptionButton>
        )}
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <OptionButton
        heading="3. # of cards in one color"
        marginBottom="8px"
        onClick={() => navigate("/number-of-cards")}
      >
        How many cards you have in a single color
      </OptionButton>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FooterWrapper>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ActionButton marginTop="16px">Confirm</ActionButton>
      </FooterWrapper>
    </>
  );
};

export default InformationSharingScreen;
