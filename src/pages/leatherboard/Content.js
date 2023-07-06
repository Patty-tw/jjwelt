import React from "react";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <div className="grid md:grid-cols-2 leading-relaxed mt-10">
      <div className="w-4/5 mx-auto my-5">
        <img src="./images/DSC01020.jpg" alt="dessicant" className="mx-auto" />
        <div className="md:max-w-md mx-auto mt-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("leatherboard_welt.production")}
          </h1>
          <p className="md:w-4/5">
            {t("leatherboard_welt.production content")}
          </p>
        </div>
      </div>
      <div className="w-4/5 mx-auto my-5">
        <img
          src="https://picsum.photos/500?random=1"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="md:max-w-md mx-auto mt-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("leatherboard_welt.material")}
          </h1>
          <p className="md:w-4/5">{t("leatherboard_welt.material content")}</p>
        </div>
      </div>
      <div className="w-4/5 mx-auto my-5">
        <img
          src="https://picsum.photos/500?random=2"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="md:max-w-md mx-auto mt-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("leatherboard_welt.machine")}
          </h1>
          <p className="md:w-4/5">{t("leatherboard_welt.machine content")}</p>
        </div>
      </div>

      <div className="w-4/5 mx-auto my-5">
        <img
          src="./images/S__4325608.jpg"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="md:max-w-md mx-auto mt-5">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("leatherboard_welt.customise")}
          </h1>
          <p className="md:w-4/5">{t("leatherboard_welt.customise content")}</p>
        </div>
      </div>
    </div>
  );
}
