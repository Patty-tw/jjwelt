import React from "react";

export default function Testimonial() {
  return (
    <div>
      <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px] text-center mt-10 md:mb-10">
        Our Customers
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 mx-auto px-10 text-center">
        <ul className="md:text-lg lg:text-2xl py-5">Dr.Martens</ul>
        <ul className="md:text-lg lg:text-2xl py-5">Timberland</ul>
        <ul className="md:text-lg lg:text-2xl py-5">Coach</ul>
        <ul className="md:text-lg lg:text-2xl py-5">Zara</ul>
        <ul className="md:text-lg lg:text-2xl py-5">Lacoste</ul>
      </div>
    </div>
  );
}
