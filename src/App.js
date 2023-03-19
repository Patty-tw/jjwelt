import React from "react"
import Home from "./pages/home/Home"
import Navbar from "./pages/Navbar";
import Aboutus from "./pages/aboutus/Aboutus"
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <main>
        <Navbar />
      </main>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </>
  );
}

