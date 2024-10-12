import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// @ts-expect-error TS(6142): Module './components/PageWrapper/PageWrapper' was ... Remove this comment to see the full error message
import PageWrapper from "./components/PageWrapper/PageWrapper";
// @ts-expect-error TS(6142): Module './pages/WelcomeScreen/WelcomeScreen' was r... Remove this comment to see the full error message
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
// @ts-expect-error TS(6142): Module './pages/InformationSharingScreen/Informati... Remove this comment to see the full error message
import InformationSharingScreen from "./pages/InformationSharingScreen/InformationSharingScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// @ts-expect-error TS(6142): Module './pages/HighCardPointsScreen/HighCardPoint... Remove this comment to see the full error message
import HighCardPointsScreen from "./pages/HighCardPointsScreen/HighCardPointsScreen";
// @ts-expect-error TS(6142): Module './pages/FirstInformationSharedScreen/First... Remove this comment to see the full error message
import FirstInformationSharedScreen from "./pages/FirstInformationSharedScreen/FirstInformationSharedScreen";
// @ts-expect-error TS(6142): Module './pages/CardDistributionScreen/CardDistrib... Remove this comment to see the full error message
import CardDistributionScreen from "./pages/CardDistributionScreen/CardDistributionScreen";
// @ts-expect-error TS(6142): Module './InformationContext' was resolved to '/Us... Remove this comment to see the full error message
import { InformationProvider } from "./InformationContext";
// @ts-expect-error TS(6142): Module './pages/NumberOfCardsScreen/NumberOfCardsS... Remove this comment to see the full error message
import NumberOfCardsScreen from "./pages/NumberOfCardsScreen/NumberOfCardsScreen";
// @ts-expect-error TS(6142): Module './pages/BothInformationSharedScreen/BothIn... Remove this comment to see the full error message
import BothInformationSharedScreen from "./pages/BothInformationSharedScreen/BothInformationSharedScreen";
// @ts-expect-error TS(6142): Module './pages/FirstPlaceBidScreen/FirstPlaceBidS... Remove this comment to see the full error message
import FirstPlaceBidScreen from "./pages/FirstPlaceBidScreen/FirstPlaceBidScreen";
// @ts-expect-error TS(6142): Module './BiddingContext' was resolved to '/Users/... Remove this comment to see the full error message
import { BiddingProvider } from "./BiddingContext";
// @ts-expect-error TS(6142): Module './components/MobileOnlyInformationPanel/Mo... Remove this comment to see the full error message
import MobileOnlyInformationPanel from "./components/MobileOnlyInformationPanel/MobileOnlyInformationPanel";
import { useEffect, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(18, 165, 130)",
    },
    secondary: {
      main: "rgba(217, 217, 217)",
    },
    // @ts-expect-error TS(2322): Type '{ primary: { main: string; }; secondary: { m... Remove this comment to see the full error message
    ternary: {
      main: "rgba(63, 62, 62, 1)",
    },
    error: {
      main: "#ffbeba",
    },
  },
});

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
