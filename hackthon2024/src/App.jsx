import React from "react";
import Login from "./componenets/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GymHome from "./pages/HomePage";

import Contact from "./componenets/ContactMe";
import Motivational from "./pages/MotivationalSite";
import Report from "./pages/Report";
import MembershipPage from "./pages/MembershipPage";
import DietPlan from "./pages/DietPlan";
import Exercises from "./pages/Exercises";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GymHome />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/home" element={<GymHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/diet" element={<DietPlan />} />
          <Route path="/exercise" element={<Exercises />} />

          <Route path="/motivation" element={<Motivational />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
