import React from "react"
import Hero from "./Hero"
import Gallery from "./Gallery"
import { Routes, Route } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div>
                <Hero />
                <Gallery />
            </div>
            <Routes>
                {/* <Route path="/leather-welt" element={<Leatherwelt />} /> */}
                {/* <Route path="/plastic-welt" element={<Plasticwelt />} /> */}
            </Routes>
        </>
    )
}