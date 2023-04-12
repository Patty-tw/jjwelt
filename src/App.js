import React from "react"
import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home"
import Navbar from "./pages/Navbar";
import Desiccant from "./pages/desiccant/Desiccant";
import Aboutus from "./pages/aboutus/Aboutus"
import Leather from "./pages/leather/Leather"
import PlasticWelt from "./pages/plasticwelt/PlasticWelt";
import StackedLeather from "./pages/stackedleather/StackedLeather";
import LeatherBoard from "./pages/leatherboard/LeatherBoard";
import LeatherWelt from "./pages/leatherwelt/LeatherWelt";
import Outsole from "./pages/outsole/Outsole";
import Footer from "./pages/Footer";



export default function App() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (

    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/leather" element={<Leather />} />
        <Route path="/leather-welt" element={<LeatherWelt />} />
        <Route path="/leatherboard-welt" element={<LeatherBoard />} />
        <Route path="/plastic-welt" element={<PlasticWelt />} />
        <Route path="/stacked-leather" element={<StackedLeather />} />
        <Route path="/desiccant" element={<Desiccant />} />
        <Route path="/outsole" element={<Outsole />} />
      </Routes>
      <Footer />
    </main>

  );
}

