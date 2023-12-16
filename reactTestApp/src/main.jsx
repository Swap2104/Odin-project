import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";
import "./index.css";
import Buttons from "./components/buttons.jsx";
import Count from "./components/Counter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Count />
  </React.StrictMode>
);
