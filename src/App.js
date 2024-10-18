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

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(18, 165, 130)",
    },
    secondary: {
      main: "rgba(217, 217, 217)",
    },
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
    <InformationProvider>
      <BiddingProvider>
        <ThemeProvider theme={theme}>
          <div
            //CHECK WHETHER THIS IS NEEDED
            // class="flex w-screen h-screen justify-center items-center"
            tabindex="0"
          >
            <div className="App">
              {isMobile ? (
                <BrowserRouter>
                  <PageWrapper>
                    <Routes>
                      <Route path="/" element={<WelcomeScreen />} />
                      <Route
                        path="/info-sharing"
                        element={<InformationSharingScreen />}
                      />
                      <Route
                        path="/high-card-points"
                        element={<HighCardPointsScreen />}
                      />
                      <Route
                        path="/card-distribution"
                        element={<CardDistributionScreen />}
                      />
                      <Route
                        path="/number-of-cards"
                        element={<NumberOfCardsScreen />}
                      />
                      <Route
                        path="/first-info-shared"
                        element={<FirstInformationSharedScreen />}
                      />
                      <Route
                        path="/both-info-shared"
                        element={<BothInformationSharedScreen />}
                      />
                      <Route
                        path="/place-bid/first-bid"
                        element={<FirstPlaceBidScreen />}
                      />
                    </Routes>
                  </PageWrapper>
                </BrowserRouter>
              ) : (
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
