import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-aboutus-banner bg-cover bg-center">
        <div className="h-[400px] opacity-85 bg-gradient-to-r from-white/[.85] flex items-center justify-center">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-medium ">
            {t("product.welting")}
          </h1>
        </div>
      </div>
    </>
  );
}
