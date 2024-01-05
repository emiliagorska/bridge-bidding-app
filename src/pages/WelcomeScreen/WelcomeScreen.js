import React from "react";
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { StyledContainer } from "./WelcomeScreen.styles";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <ShareInfoButton
        marginTop="48px"
        marginBottom="16px"
        onClick={() => navigate("/info-sharing")}
      >
        Share Information
      </ShareInfoButton>
      <ShareInfoButton marginBottom="32px" disabled>
        Share Information
      </ShareInfoButton>
      <StyledContainer>
        <ActionButton marginBottom="8px" disabled>
          Place Bid
        </ActionButton>
        <ActionButton>New Game</ActionButton>
      </StyledContainer>
    </>
  );
};

export default WelcomeScreen;
