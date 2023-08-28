import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";

//SCSS
import "./app/styles/app.scss";

const root = ReactDOM.createRoot(document.getElementById("app-strappberry"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
