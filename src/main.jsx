/* Node Modules */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* components */
import App from "./App.jsx";

/* CSS Link */
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
