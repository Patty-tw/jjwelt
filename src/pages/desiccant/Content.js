import React from "react";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-rows-2 md:gap-10 md:px-5 leading-relaxed">
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=6"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("raw material")}
          </h1>
          <p className="md:w-4/5">
            Our silica gel is Directive 2011/65/EU certified and does not
            contain Lead, Mercury, Cadmium and hazardous materials set by RoHS.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=7"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            Various sizes and packing
          </h1>
          <p className="md:w-4/5">
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
