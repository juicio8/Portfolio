import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IsOpenContextProvider } from "./context/IsOpenContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IsOpenContextProvider>
      <App />
    </IsOpenContextProvider>
  </React.StrictMode>
);
