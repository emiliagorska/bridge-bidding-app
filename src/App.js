import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageWrapper from "./components/PageWrapper/PageWrapper";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import InformationSharingScreen from "./pages/InformationSharingScreen/InformationSharingScreen";

function App() {
  return (
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
  );
}

export default App;
