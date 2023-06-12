import React from "react";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <div className="items-center p-10">
      <p className="m-3 text-base md:text-lg lg:text-xl mx-auto md:max-w-md lg:max-w-2xl leading-relaxed">
        {t("about_us.about us - content")}
      </p>
    </div>
  );
}
