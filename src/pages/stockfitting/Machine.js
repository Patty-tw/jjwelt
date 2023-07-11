import React from "react";
import { useTranslation } from "react-i18next";

export default function Machine() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] mt-10 mb-10">
        Machine
      </h1>
      <div className="md:grid md:grid-cols-4 gap-10 px-10 lg:text-center lg:justify-items-center">
        <div className="md:col-span-2 mb-10 md:mb-0">
          <h1 className="text-xl mb-5">{t("stock_fitting.cnc")}</h1>
          <video controls className="md:h-[250px] lg:h-[550px] object-fit">
            <source src="./images/machine-1.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="mb-10 md:mb-0">
          <h1 className="text-xl mb-5">
            {t("stock_fitting.semi-automatic edger")}
          </h1>
          <video controls className="md:h-[250px] lg:h-[550px] object-fit">
            <source src="./images/machine-2.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className="mb-10 md:mb-0">
          <h1 className="text-xl mb-5">
            {t("stock_fitting.automatic edging machine")}
          </h1>
          <video controls className="md:h-[250px] lg:h-[550px] object-fit">
            <source src="./images/machine-3.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}
