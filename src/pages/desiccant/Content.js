import React from "react";

export default function Content() {
  return (
    <div className="grid grid-rows-2 gap-5 leading-relaxed sm:px-5">
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=6"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            Raw Material
          </h1>
          <p className="w-3/4">
            Our silica gel is Directive 2011/65/EU certified and does not
            contain Lead, Mercury, Cadmium and hazardous materials set by RoHS.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=7"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            Various sizes and packing
          </h1>
          <p className="w-3/4">
            Sizes: We are able to produce sizes ranging from 1g, 2g, 3G, 4G, 5g,
            6g, 10g, 20g, 30g, 50g, 100g, 200g, 500g, 1000g. <br />
            Packing material: Compound paper, filter paper, non-woven paper.
            <br />
            Printed Text: We have a wide selection of languages printed on the
            packing which includes English, Chinese, French, German etc.
            <br />
            Ordering Info: Minimum order is 10000 pieces, increments of 100.
            Rate: $60/10000pcs(3g) , negotiable with volume.
          </p>
        </div>
      </div>
    </div>
  );
}
