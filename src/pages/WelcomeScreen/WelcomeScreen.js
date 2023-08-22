import React from "react";
import "./WelcomeScreen.css";
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";

const WelcomeScreen = () => {
  return (
    <>
      <ShareInfoButton marginTop="32px" marginBottom="16px">
        Share Information{" "}
      </ShareInfoButton>
      <ShareInfoButton marginBottom="32px" disabled>
        Share Information
      </ShareInfoButton>
      <ActionButton marginBottom="8px">Place Bid</ActionButton>
      <ActionButton>New Game</ActionButton>
    </>
  );
};

export default WelcomeScreen;
