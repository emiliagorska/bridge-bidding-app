import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import InformationSharingScreen from "./pages/InformationSharingScreen/InformationSharingScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HighCardPointsScreen from "./pages/HighCardPointsScreen/HighCardPointsScreen";
import FirstInformationSharedScreen from "./pages/FirstInformationSharedScreen/FirstInformationSharedScreen";
import CardDistributionScreen from "./pages/CardDistributionScreen/CardDistributionScreen";
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
  },
});

function App() {
  return (
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
                path="/first-info-shared"
                element={<FirstInformationSharedScreen />}
              />
            </Routes>
          </PageWrapper>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
