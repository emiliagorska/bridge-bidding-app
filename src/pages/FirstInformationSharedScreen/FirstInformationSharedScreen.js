import React from "react";
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { useBidding } from "../../BiddingContext";
import { useNavigate } from "react-router-dom";
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

const FirstInformationSharedScreen = () => {
  const navigate = useNavigate();
  const bids = useBidding();
  return (
    <>
      <ShareInfoButton marginTop="32px" marginBottom="16px" dontShowPlusIcon>
        {bids[0].typeOfInformation} - {bids[0].details}
      </ShareInfoButton>
      <ShareInfoButton
        marginBottom="32px"
        onClick={() => navigate("/info-sharing")}
      >
        Share Information
      </ShareInfoButton>
      <FooterWrapper>
        <ActionButton marginBottom="8px">Place Bid</ActionButton>
        <ActionButton>New Game</ActionButton>
      </FooterWrapper>
    </>
  );
};

export default FirstInformationSharedScreen;
