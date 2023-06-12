import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px] text-center mt-10 md:mb-10">
        {t("products")}
      </h1>
      <div className="grid grid-cols-auto-fit gap-10 px-10 justify-items-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg object-cover object-center">
          <Link to="/leather-welt">
            <img
              className="w-full"
              src="https://picsum.photos/500?random=1"
              alt="leather welt"
            />
            <p className="flex font-bold items-center justify-center h-20">
              {t("leather welt")}
            </p>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to="/leatherboard-welt">
            <img
              className="w-full"
              src="https://picsum.photos/500?random=6"
              alt="leatherboard welt"
            />
            <p className="flex font-bold items-center justify-center h-20">
              {t("leatherboard welt")}
            </p>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to="/plastic-welt">
            <img
              className="w-full"
              src="https://picsum.photos/500?random=2"
              alt="plastic welt"
            />
            <p className="flex font-bold items-center justify-center h-20">
              {t("plastic welt")}
            </p>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to="/stacked-leather">
            <img
              className="w-full"
              src="https://picsum.photos/500?random=3"
              alt="stacked leather"
            />
            <p className="flex font-bold items-center justify-center h-20">
              {t("stacked leather")}
            </p>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to="/outsole-stock-fitting">
            <img
              className="w-full"
              src="https://picsum.photos/500?random=4"
              alt="outsole stock fitting"
            />
            <p className="flex font-bold items-center justify-center h-20">
              {t("stock fitting")}
            </p>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to="/desiccant">
            <img
              className="w-full"
              src="https://picsum.photos/500?random=5"
              alt="desiccant"
            />
            <p className="flex font-bold items-center justify-center h-20">
              {t("desiccants")}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
