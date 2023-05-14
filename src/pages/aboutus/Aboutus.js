import React from "react";
import Map from "./Map";
import Hero from "./Hero";
import Content from "./Content";

export default function Contactus() {
  // const maps = mapData.map((item) => {
  //   return <Map key={item.id} {...item} />;
  // });
  return (
    <>
      <Hero />
      <Content />
      <Map />
    </>
  );
}
