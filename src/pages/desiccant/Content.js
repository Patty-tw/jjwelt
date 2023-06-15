import React from "react";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-rows-2 md:gap-10 md:px-5 leading-relaxed mt-10">
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
          <p className="md:w-4/5">{t("desiccant.raw material content")}</p>
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
            {t("desiccant.size and packaging")}
          </h1>
          <p className="md:w-4/5">
            {t("desiccant.size content")}
            <br />
            {t("desiccant.packing content")}
            <br />
            {t("desiccant.text")}
            <br />
            {t("desiccant.ordering info")}
          </p>
        </div>
      </div>
    </div>
  );
}
