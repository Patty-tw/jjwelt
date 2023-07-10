import React from "react";
import { useTranslation } from "react-i18next";

export default function Testimonial() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-2xl md:text-[26px] lg:text-[30px] text-center mt-5 md:mb-10">
        {t("testimonial")}
      </h1>
      <div className="grid grid-cols-4 p-5 md:px-10 items-center justify-items-center justify-between">
        <img src="./images/footjoy.png" alt="foot joy" className="w-1/2" />
        <img src="./images/adidas.png" alt="adidas" className="w-1/2" />
        <img src="./images/caleres.png" alt="asics" className="scale-[.6]" />
        <img
          src="./images/clarks-logo.png"
          alt="clarks"
          className="w-96 scale-[.6]"
        />
        <img
          src="./images/cole-hann.png"
          alt="cole-hann"
          className="w-96 scale-90"
        />
        <img
          src="./images/tory-burch.png"
          alt="tory-burch"
          className="w-96 scale-90"
        />
        <img
          src="./images/lacoste.png"
          alt="merell"
          className="w-96 scale-[.7]"
        />
        <img
          src="./images/saucony.png"
          alt="saucony"
          className="w-96 scale-[.6]"
        />
      </div>
    </div>
  );
}
