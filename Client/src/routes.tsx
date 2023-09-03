import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage";
import Register from "./pages/registerPage";
import ConfirmRegister from "./pages/confirmRegister";
import LoginPage from "./pages/loginPage";
import MyInitialPage from "./pages/initialPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<ConfirmRegister />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyInitialPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
