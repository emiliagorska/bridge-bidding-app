import React from "react";
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { useBidding } from "../../BiddingContext";

const BothInformationSharedScreen = () => {
  const bids = useBidding();
  return (
    <>
      <ShareInfoButton marginTop="32px" marginBottom="16px" dontShowPlusIcon>
        {bids[0].typeOfInformation} - {bids[0].details}
      </ShareInfoButton>
      <ShareInfoButton marginBottom="32px" dontShowPlusIcon>
        {bids[1].typeOfInformation} - {bids[1].details}
      </ShareInfoButton>
      <ActionButton marginBottom="8px">Place Bid</ActionButton>
      <ActionButton>New Game</ActionButton>
    </>
  );
};

export default BothInformationSharedScreen;
