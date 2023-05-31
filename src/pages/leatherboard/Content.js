import React from "react";

export default function Content() {
  return (
    <div className="grid grid-rows-5 gap-5 sm:px-5 leading-relaxed">
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=5"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            Introduction of leatherboard
          </h1>
          <p className="w-3/4">Extrusion</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=1"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            Premium bonded leather material sourced from Italy and Germany
          </h1>
          <p className="w-3/4">
            Raw material is made from a mixture of leather scrap and other
            proprietary mixture to create a leather-like feel. <br />
            Material thickness range from 2.0mm to 5.0mm, in 0.5mm increments.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=2"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            Precision machines imported from Italy
          </h1>
          <p className="w-3/4">
            As with our leather welts, all bonded leather welt are manufactured
            and process with the same set of machines 100% from Italy.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=3"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            Spray painted to any color and finish
          </h1>
          <p className="w-3/4">
            Our experience technicians are able to spray paint any color and
            effect including polka-dots, antiqued and faux-leather.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=4"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            Customize to any design and dimensions
          </h1>
          <p className="w-3/4">
            Great alternative for customers looking for leather-like premium
            feel at a lower price.
          </p>
        </div>
      </div>
    </div>
  );
}
