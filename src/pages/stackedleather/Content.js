import React from "react";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-rows-4 md:gap-10 md:px-5 leading-relaxed">
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=5"
          alt="raw material of stacked leather"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("raw material")}
          </h1>
          <p className="md:w-4/5">
            {t("stacked_leather.raw material content")}
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=2"
          alt="colors of stacked leather"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("stacked_leather.colours")}
          </h1>
          <p className="md:w-4/5">{t("stacked_leather.colours content")}</p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=3"
          alt="customisation of stacked leather"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("stacked_leather.customise")}
          </h1>
          <p className="md:w-4/5">{t("stacked_leather.customise content")}</p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=4"
          alt="quality outcome of stacked"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("stacked_leather.quality")}
          </h1>
          <p className="md:w-4/5">{t("stacked_leather.quality content")}</p>
        </div>
      </div>
    </div>
  );
}
