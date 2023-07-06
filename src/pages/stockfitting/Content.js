import React from "react";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <div className="grid md:grid-cols-2 leading-relaxed mt-10 mx-auto">
      <div className="w-4/5 mx-auto my-5">
        <video controls>
          <source src="./images/710062209.817094.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="p-5 mx-auto">
        <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
          {t("stock_fitting.customise")}
        </h1>
        <h2 className="text-ccl">{t("stock_fitting.auto vibrating knife")}</h2>
        <br />
        <div className="grid md:grid-cols-3 gap-5">
          <img
            src="./images/ebzWrqdtMKGobXM.png"
            alt="stock-fitting-1"
            className="w-4/5 md:w-full mx-auto px-5"
          />
          <img
            src="./images/GmcGEHebZtLtIcT.png"
            alt="stock-fitting-2"
            className="w-4/5 md:w-full mx-auto px-5"
          />
          <img
            src="./images/bsoJOgBIPSETltX.png"
            alt="stock-fitting-"
            className="w-4/5 md:w-full mx-auto px-5"
          />
        </div>
      </div>
    </div>
  );
}
