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
  return (
    <InformationProvider>
      <BiddingProvider>
        <ThemeProvider theme={theme}>
          <div className="App">
            <BrowserRouter>
              <PageWrapper style={{ height: "100%" }}>
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
          </div>
        </ThemeProvider>
      </BiddingProvider>
    </InformationProvider>
  );
}

export default App;
