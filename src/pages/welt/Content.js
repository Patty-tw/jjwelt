import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <div className="grid md:grid-rows-2 md:gap-10 md:px-5 leading-relaxed mt-10">
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="./images/leather-welt-1.jpg"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("product.leather welt")}
          </h1>
          <p className="md:w-4/5">{t("welting_page.leather welt content")}</p>
          <Link
            to="/leather-welt"
            className="flex mt-3 w-[100px] justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {t("details")}
          </Link>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center ">
        <img
          src="https://picsum.photos/500?random=2"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("product.leatherboard welt")}
          </h1>
          <p className="md:w-4/5 ">
            {t("welting_page.leatherboard welt content")}
          </p>
          <Link
            to="/leatherboard-welt"
            className="flex mt-3 w-[100px] justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {t("details")}
          </Link>
        </div>
      </div>
    </div>
  );
}
