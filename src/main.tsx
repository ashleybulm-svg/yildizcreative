import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app/App.tsx";
import AIVideoProduction from "./app/pages/AIVideoProduction.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ai-video-production" element={<AIVideoProduction />} />
    </Routes>
  </BrowserRouter>
);
