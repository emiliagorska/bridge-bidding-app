import React from "react";
// @ts-expect-error TS(6142): Module '../../components/Buttons/ShareInfoButton/S... Remove this comment to see the full error message
import ShareInfoButton from "../../components/Buttons/ShareInfoButton/ShareInfoButton";
// @ts-expect-error TS(6142): Module '../../components/Buttons/ActionButton/Acti... Remove this comment to see the full error message
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";
// @ts-expect-error TS(6142): Module '../../components/FooterWrapper/FooterWrapp... Remove this comment to see the full error message
import FooterWrapper from "../../components/FooterWrapper/FooterWrapper";

const WelcomeScreen = () => {
  const navigate = useNavigate();
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ShareInfoButton
        marginTop="48px"
        marginBottom="16px"
        onClick={() => navigate("/info-sharing")}
        showPlusIcon
      >
        Share Information
      </ShareInfoButton>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ShareInfoButton marginBottom="32px" showPlusIcon disabled>
        Share Information
      </ShareInfoButton>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FooterWrapper>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ActionButton marginBottom="8px" disabled>
          Place Bid
        </ActionButton>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ActionButton>New Game</ActionButton>
      </FooterWrapper>
    </>
  );
};

export default WelcomeScreen;
