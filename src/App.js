import React from "react"
import Home from "./pages/home/Home"
import Navbar from "./pages/Navbar";
import Desiccant from "./pages/desiccant/Desiccant";
import Aboutus from "./pages/aboutus/Aboutus"
import LeatherWelt from "./pages/leatherwelt/LeatherWelt"
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
        <Route path="/leather-welt" element={<LeatherWelt />} />
        <Route path="/desiccant" element={<Desiccant />} />
      </Routes>
    </>
  );
}

