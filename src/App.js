import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import InformationSharingScreen from "./pages/InformationSharingScreen/InformationSharingScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(217, 217, 217, 0.50)",
    },
    secondary: {
      main: "rgba(217, 217, 217)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<WelcomeScreen />} />
              <Route
                path="/info-sharing"
                element={<InformationSharingScreen />}
              />
            </Routes>
          </PageWrapper>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
