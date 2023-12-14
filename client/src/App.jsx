import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import necessary components

import Home from "./Home";
import Singin from "./Singin";
import Homee from "./Homee";
import Header from "../components/Header";
import Profile from "./Profile";
import PrivateRoute from "../components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Singin />} />
        <Route path="/homee" element={<Homee />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
