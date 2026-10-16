import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* Visitor stats - shows in the Vercel dashboard's Analytics tab */}
    <Analytics />
  </StrictMode>
);
