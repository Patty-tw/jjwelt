import React from "react";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Testimonial />
      <Gallery />
    </div>
  );
}
