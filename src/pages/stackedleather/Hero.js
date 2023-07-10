import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-[url('/public/images/carolin-thiergart-unsplash-2.jpg')] bg-cover bg-right md:bg-center">
        <div className="h-[250px] md:h-[400px] opacity-85 bg-gradient-to-r from-white/[.85] flex items-center pl-[60px] md:pl-[90px] lg:pl-[120px]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium ">
            {t("product.stacked leather")}
          </h1>
        </div>
      </div>
    </>
  );
}
