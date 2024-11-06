import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import Providers from "./components/providers";
import "./components/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
);
