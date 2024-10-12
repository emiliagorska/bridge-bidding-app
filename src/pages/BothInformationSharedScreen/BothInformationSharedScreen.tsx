import React from "react";
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { useInformation, useInformationDispatch } from "../../InformationContext";
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";
import { useNavigate } from "react-router-dom";

const BothInformationSharedScreen = () => {
  const navigate = useNavigate();
  const bids = useInformation();
  const dispatchInformation = useInformationDispatch();

  const onNewGame = () => {
    dispatchInformation({ type: "clearedAll" });
    navigate("/");
  };

  const onPlaceBid = () => {
    navigate("/place-bid/first-bid");
  };

  return (
    <>
      <ShareInfoButton marginTop="32px" marginBottom="16px">
        {bids[0].typeOfInformation} - {bids[0].details}
      </ShareInfoButton>
      <ShareInfoButton marginBottom="32px">
        {bids[1].typeOfInformation} - {bids[1].details}
      </ShareInfoButton>
      <FooterWrapper>
        <ActionButton marginBottom="8px" onClick={onPlaceBid}>
          Place Bid
        </ActionButton>
        <ActionButton onClick={onNewGame}>New Game</ActionButton>
      </FooterWrapper>
    </>
  );
};

export default BothInformationSharedScreen;
