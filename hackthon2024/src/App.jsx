import React from "react";
import Login from "./componenets/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GymHome from "./pages/HomePage";

import Contact from "./componenets/ContactMe";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GymHome />} />

          <Route path="/home" element={<GymHome />} />
          <Route path="login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
