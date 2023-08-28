import React from "react";
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";

const FirstInformationSharedScreen = () => {
  return (
    <>
      <ShareInfoButton marginTop="32px" marginBottom="16px" dontShowPlusIcon>
        First info shared displayed here - from context, react store?
      </ShareInfoButton>
      <ShareInfoButton marginBottom="32px" disabled>
        Share Information
      </ShareInfoButton>
      <ActionButton marginBottom="8px">Place Bid</ActionButton>
      <ActionButton>New Game</ActionButton>
    </>
  );
};

export default FirstInformationSharedScreen;
