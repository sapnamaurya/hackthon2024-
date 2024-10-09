import React from "react";
import SignIn from "./componenets/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GymHome from "./pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GymHome />} />

          <Route path="/home" element={<GymHome />} />
          <Route path="sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
