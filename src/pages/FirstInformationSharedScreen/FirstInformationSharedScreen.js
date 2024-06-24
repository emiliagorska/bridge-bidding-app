import React from "react";
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { useInformation } from "../../InformationContext";
import { useNavigate } from "react-router-dom";
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

const FirstInformationSharedScreen = () => {
  const navigate = useNavigate();
  const bids = useInformation();
  return (
    <>
      <ShareInfoButton marginTop="32px" marginBottom="16px">
        {bids[0].typeOfInformation} - {bids[0].details}
      </ShareInfoButton>
      <ShareInfoButton
        marginBottom="32px"
        onClick={() => navigate("/info-sharing")}
        showPlusIcon
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
