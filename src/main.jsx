import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LandingPageView1 from "./components/LandingPageView1.jsx";
import LandingPageView2 from "./components/LandingPageView2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <LandingPageView1 />
  </StrictMode>
);

//<LandingPageView2 />
//<LandingPageView1 />