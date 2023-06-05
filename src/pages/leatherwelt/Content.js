import React from "react";

export default function Content() {
  return (
    <div className="grid md:grid-rows-4 md:gap-10 md:px-5 leading-relaxed">
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=5"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            Premium vegetable tanned leather sourced from around the world
          </h1>
          <p className="w-3/4">
            Our company understands the color tone variations in leather from
            different regions. To be able to meet customer demands, our factory
            carries highest quality leather from Italy, Argentina and Brazil to
            satisfy all product styles.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=1"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            Professional machinery from Italy
          </h1>
          <p className="w-3/4">
            All our machines are imported from Italy, ensuring highest possible
            craftsmanship.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=2"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
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
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=3"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            Customization according to requests
          </h1>
          <p className="w-3/4">
            Our experienced technicians can accommodate a variety of designs
            with endless possibilities. Goodyear, wheeling, pre-stitching,
            color, antiquing effects and many other special effects can be
            achieved in-house.
          </p>
        </div>
      </div>
    </div>
  );
}
