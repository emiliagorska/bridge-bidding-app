import React from "react";
// @ts-expect-error TS(6142): Module '../../components/Buttons/ShareInfoButton/S... Remove this comment to see the full error message
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
// @ts-expect-error TS(6142): Module '../../components/Buttons/ActionButton/Acti... Remove this comment to see the full error message
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
// @ts-expect-error TS(6142): Module '../../InformationContext' was resolved to ... Remove this comment to see the full error message
import { useInformation, useInformationDispatch } from "../../InformationContext";
// @ts-expect-error TS(6142): Module '../../components/FooterWrapper/FooterWrapp... Remove this comment to see the full error message
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";
import { useNavigate } from "react-router-dom";

const BothInformationSharedScreen = () => {
  const navigate = useNavigate();
  const bids = useInformation();
  const dispatchInformation = useInformationDispatch();

  const onNewGame = () => {
    // @ts-expect-error TS(2721): Cannot invoke an object which is possibly 'null'.
    dispatchInformation({ type: "clearedAll" });
    navigate("/");
  };

  const onPlaceBid = () => {
    navigate("/place-bid/first-bid");
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ShareInfoButton marginTop="32px" marginBottom="16px">
        {/* @ts-expect-error TS(2531): Object is possibly 'null'. */}
        {bids[0].typeOfInformation} - {bids[0].details}
      </ShareInfoButton>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ShareInfoButton marginBottom="32px">
        {/* @ts-expect-error TS(2531): Object is possibly 'null'. */}
        {bids[1].typeOfInformation} - {bids[1].details}
      </ShareInfoButton>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FooterWrapper>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ActionButton marginBottom="8px" onClick={onPlaceBid}>
          Place Bid
        </ActionButton>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ActionButton onClick={onNewGame}>New Game</ActionButton>
      </FooterWrapper>
    </>
  );
};

export default BothInformationSharedScreen;
