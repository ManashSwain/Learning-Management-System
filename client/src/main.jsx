import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContext from "./context/AppContext.jsx";
import BrowserRouter from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContext>
      <StrictMode>
        <App />
      </StrictMode>
    </AppContext>
  </BrowserRouter>
);
