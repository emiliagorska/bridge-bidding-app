import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import InformationSharingScreen from "./pages/InformationSharingScreen/InformationSharingScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HighCardPointsScreen from "./pages/HighCardPointsScreen/HighCardPointsScreen";
import FirstInformationSharedScreen from "./pages/FirstInformationSharedScreen/FirstInformationSharedScreen";
import CardDistributionScreen from "./pages/CardDistributionScreen/CardDistributionScreen";
import { InformationProvider } from "./InformationContext";
import NumberOfCardsScreen from "./pages/NumberOfCardsScreen/NumberOfCardsScreen";
import BothInformationSharedScreen from "./pages/BothInformationSharedScreen/BothInformationSharedScreen";
import FirstPlaceBidScreen from "./pages/FirstPlaceBidScreen/FirstPlaceBidScreen";
import { BiddingProvider } from "./BiddingContext";
import MobileOnlyInformationPanel from "./components/MobileOnlyInformationPanel/MobileOnlyInformationPanel";
import { useEffect, useState } from "react";


function App() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  const onResize = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener("resize", onResize);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <InformationProvider>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <BiddingProvider>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ThemeProvider theme={theme}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div
            //CHECK WHETHER THIS IS NEEDED
            // class="flex w-screen h-screen justify-center items-center"
            // @ts-expect-error TS(2322): Type '{ children: Element; tabindex: string; }' is... Remove this comment to see the full error message
            tabindex="0"
          >
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="App">
              {isMobile ? (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <BrowserRouter>
                  {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <PageWrapper>
                    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Routes>
                      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <Route path="/" element={<WelcomeScreen />} />
                      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <Route
                        path="/info-sharing"
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        element={<InformationSharingScreen />}
                      />
                      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <Route
                        path="/high-card-points"
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        element={<HighCardPointsScreen />}
                      />
                      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <Route
                        path="/card-distribution"
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        element={<CardDistributionScreen />}
                      />
                      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <Route
                        path="/number-of-cards"
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        element={<NumberOfCardsScreen />}
                      />
                      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <Route
                        path="/first-info-shared"
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        element={<FirstInformationSharedScreen />}
                      />
                      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <Route
                        path="/both-info-shared"
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        element={<BothInformationSharedScreen />}
                      />
                      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                      <Route
                        path="/place-bid/first-bid"
                        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                        element={<FirstPlaceBidScreen />}
                      />
                    </Routes>
                  </PageWrapper>
                </BrowserRouter>
              ) : (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <MobileOnlyInformationPanel heading="Apologies, this app is not yet optimized for desktop &#128577; Coming soon! For now, please visit easybidder.web.app on your mobile device" />
              )}
            </div>
          </div>
        </ThemeProvider>
      </BiddingProvider>
    </InformationProvider>
  );
}

export default App;
