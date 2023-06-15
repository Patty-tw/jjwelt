import React from "react";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-rows-4 md:gap-10 md:px-5 leading-relaxed mt-10">
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=1"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("raw material")}
          </h1>
          <p className="md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            {t("plastic_welt_page.raw material content")}
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=2"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("plastic_welt_page.pvc welt")}
          </h1>
          <p className="md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            {t("plastic_welt_page.pvc welt content")}
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=3"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("plastic_welt_page.tr, tpr, tpu welt")}
          </h1>
          <p className="md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            {t("plastic_welt_page.tr, tpr, tpu welt content")}
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=4"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("plastic_welt_page.colour welt")}
          </h1>
          <p className="md:w-4/5">
            {t("plastic_welt_page.colour welt content")}
          </p>
        </div>
      </div>
    </div>
  );
}
