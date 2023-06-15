import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-[url('/public/images/desiccant.jpg')] bg-cover bg-top">
        <div className="h-[400px] opacity-85 bg-gradient-to-r from-white/[.85] flex items-center pl-[60px] md:pl-[90px] lg:pl-[120px]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium ">
            {t("product.desiccants")}
          </h1>
        </div>
      </div>
    </>
  );
}
