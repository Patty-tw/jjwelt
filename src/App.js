import React from "react"
import Home from "./pages/home/Home"
import Navbar from "./pages/Navbar";
import Desiccant from "./pages/desiccant/Desiccant";
import Aboutus from "./pages/aboutus/Aboutus"
import Leather from "./pages/leather/Leather"
import PlasticWelt from "./pages/plasticwelt/PlasticWelt";
import StackedLeather from "./pages/stackedleather/StackedLeather";
import LeatherBoard from "./pages/leatherboard/LeatherBoard";
import Outsole from "./pages/outsole/Outsole";
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
        <Route path="/leather" element={<Leather />} />
        <Route path="/leatherboard-welt" element={<LeatherBoard />} />
        <Route path="/plastic-welt" element={<PlasticWelt />} />
        <Route path="/stacked-leather" element={<StackedLeather />} />
        <Route path="/desiccant" element={<Desiccant />} />
        <Route path="/outsole" element={<Outsole />} />

      </Routes>
    </>
  );
}

