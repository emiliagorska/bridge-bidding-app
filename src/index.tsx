import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// @ts-expect-error TS(6142): Module './App' was resolved to '/Users/emiliagorsk... Remove this comment to see the full error message
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./fonts/Rubik-VariableFont_wght.ttf";
import "./fonts/Poppins-SemiBold.ttf";
import "./fonts/Poppins-Light.ttf";

// @ts-expect-error TS(2345): Argument of type 'HTMLElement | null' is not assig... Remove this comment to see the full error message
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <React.StrictMode>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <App style={{ height: "100dvh" }} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
reportWebVitals();
