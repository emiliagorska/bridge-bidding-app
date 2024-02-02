import React from "react";
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

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
      <FooterWrapper>
        <ActionButton marginBottom="8px" disabled>
          Place Bid
        </ActionButton>
        <ActionButton>New Game</ActionButton>
      </FooterWrapper>
    </>
  );
};

export default WelcomeScreen;
