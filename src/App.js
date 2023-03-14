import React from "react"
import Home from "./pages/home/Home"
import Contactus from "./pages/contactus/Contactus";
import Navbar from "./pages/Navbar";
import { Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <>
      <main>
        <Navbar />
      </main>

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/contactus" element = {<Contactus />} />
      </Routes>
    </>
  );
}

