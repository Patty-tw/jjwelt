import React from "react";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 leading-relaxed mt-10">
      <div className="w-4/5 mx-auto my-5">
        <img
          src="./images/S__4333697.jpg"
          alt="colors of stacked leather"
          className="w-full md:mx-auto px-5"
        />
        <div className="p-5 md:py-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("stacked_leather.colours")}
          </h1>
          <p>{t("stacked_leather.colours content")}</p>
        </div>
      </div>
      <div className="w-4/5 mx-auto my-5">
        <img
          src="./images/S__4333686.jpg"
          alt="customisation of stacked leather"
          className="w-full md:mx-auto px-5"
        />
        <div className="p-5 md:py-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("stacked_leather.customise")}
          </h1>
          <p>{t("stacked_leather.customise content")}</p>
        </div>
      </div>
      {/* <div className="w-4/5 mx-auto my-5">
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
      </div> */}
    </div>
  );
}
