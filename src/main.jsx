import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { QuizeProviders } from "./context/QuizeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizeProviders>
      <App />
    </QuizeProviders>
  </StrictMode>
);
