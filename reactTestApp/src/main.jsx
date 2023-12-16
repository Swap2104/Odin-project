import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";
import "./index.css";
import Buttons from "./components/buttons.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Buttons text="google" link="www.google.com" />
    <Buttons text="react" link="https://react.dev" />
    <Buttons
      text="Youtube"
      link="https://www.youtube.com/watch?v=EFkyxzJtiv4&t=2s"
    />
  </React.StrictMode>
);
