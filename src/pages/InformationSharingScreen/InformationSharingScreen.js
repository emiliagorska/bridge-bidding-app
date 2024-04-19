import React from "react";
import Heading from "../../components/Headings/Heading/Heading";
import OptionButton from "../../components/Buttons/OptionButton/OptionButton";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
import { useInformation } from "../../InformationContext";
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

const InformationSharingScreen = () => {
  const navigate = useNavigate();
  const context = useInformation();
  console.log("INFORMATION SHARING - CONTEXT:", context[0]?.typeOfInformation);
  return (
    <>
      <Heading marginTop="8px" marginBottom="8px">
        Which information would you like to share?
      </Heading>
      {!(context[0]?.typeOfInformation === "High Card Points") &&
        !(context[1]?.typeOfInformation === "High Card Points") && (
          <OptionButton
            heading="1. High Card Points"
            marginBottom="8px"
            onClick={() => navigate("/high-card-points")}
          >
            Points calculated from your aces, kings, queens and jacks
          </OptionButton>
        )}
      {!(context[0]?.typeOfInformation === "Card Distribution") &&
        !(context[1]?.typeOfInformation === "Card Distribution") && (
          <OptionButton
            heading="2. Card Distribution"
            marginBottom="8px"
            onClick={() => navigate("/card-distribution")}
          >
            How many cards you have in each color, in descending order
          </OptionButton>
        )}
      <OptionButton
        heading="3. # of cards in one color"
        marginBottom="8px"
        onClick={() => navigate("/number-of-cards")}
      >
        How many cards you have in a single color
      </OptionButton>
      <FooterWrapper>
        <ActionButton marginTop="16px">Confirm</ActionButton>
      </FooterWrapper>
    </>
  );
};

export default InformationSharingScreen;
