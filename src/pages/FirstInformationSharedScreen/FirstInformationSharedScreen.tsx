import React from "react";
// @ts-expect-error TS(6142): Module '../../components/Buttons/ShareInfoButton/S... Remove this comment to see the full error message
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
// @ts-expect-error TS(6142): Module '../../components/Buttons/ActionButton/Acti... Remove this comment to see the full error message
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
// @ts-expect-error TS(6142): Module '../../InformationContext' was resolved to ... Remove this comment to see the full error message
import { useInformation } from "../../InformationContext";
import { useNavigate } from "react-router-dom";
// @ts-expect-error TS(6142): Module '../../components/FooterWrapper/FooterWrapp... Remove this comment to see the full error message
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

const FirstInformationSharedScreen = () => {
  const navigate = useNavigate();
  const bids = useInformation();
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ShareInfoButton marginTop="32px" marginBottom="16px">
        {/* @ts-expect-error TS(2531): Object is possibly 'null'. */}
        {bids[0].typeOfInformation} - {bids[0].details}
      </ShareInfoButton>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ShareInfoButton
        marginBottom="32px"
        onClick={() => navigate("/info-sharing")}
        showPlusIcon
      >
        Share Information
      </ShareInfoButton>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FooterWrapper>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ActionButton marginBottom="8px">Place Bid</ActionButton>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ActionButton>New Game</ActionButton>
      </FooterWrapper>
    </>
  );
};

export default FirstInformationSharedScreen;
