import React from "react";
import Login from "./componenets/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GymHome from "./pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GymHome />} />

          <Route path="/home" element={<GymHome />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
