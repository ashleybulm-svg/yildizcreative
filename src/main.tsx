import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import AIVideoProduction from "./app/pages/AIVideoProduction.tsx";
import WebDevelopment from "./app/pages/WebDevelopment.tsx";
import DigitalInvitations from "./app/pages/DigitalInvitations.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ai-video-production" element={<AIVideoProduction />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/digital-invitations" element={<DigitalInvitations />} />
    </Routes>
  </BrowserRouter>
);
