import React from "react";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2  leading-relaxed mt-10">
      <div className="w-4/5 mx-auto my-5 ">
        <img
          src="https://picsum.photos/500?random=1"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="md:max-w-md mx-auto mt-5">
          <p className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("raw material")}
          </p>
          <p>{t("plastic_welt_page.raw material content")}</p>
        </div>
      </div>
      <div className="w-4/5 mx-auto my-5 ">
        <img
          src="https://picsum.photos/500?random=2"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="md:max-w-md mx-auto mt-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("plastic_welt_page.pvc welt")}
          </h1>
          <p>{t("plastic_welt_page.pvc welt content")}</p>
        </div>
      </div>
      <div className="mx-auto w-4/5 my-5">
        <img
          src="https://picsum.photos/500?random=3"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="md:max-w-md mx-auto mt-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("plastic_welt_page.tr, tpr, tpu welt")}
          </h1>
          <p>{t("plastic_welt_page.tr, tpr, tpu welt content")}</p>
        </div>
      </div>
      <div className="mx-auto w-4/5 my-5">
        <img
          src="https://picsum.photos/500?random=4"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="md:max-w-md mx-auto mt-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("plastic_welt_page.colour welt")}
          </h1>
          <p>{t("plastic_welt_page.colour welt content")}</p>
        </div>
      </div>
    </div>
  );
}
