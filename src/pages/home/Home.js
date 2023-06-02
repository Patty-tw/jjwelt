import React from "react";
import Gallery from "./Gallery";
import Banner from "./Banner";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <div>
      <Banner />
      <Testimonial />
      <Gallery />
    </div>
  );
}
