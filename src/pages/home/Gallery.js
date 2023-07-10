import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px] text-center md:mb-10">
        {t("product.products")}
      </h1>
      <div className="grid grid-cols-auto-fit gap-10 px-10 justify-items-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg object-cover object-center">
          <Link to="/leather-welt">
            <img
              className="w-[375px] h-[250px]"
              src="./images/S__4309080.jpg"
              alt="leather welt"
            />
            <p className="flex font-bold items-center justify-center h-20">
              {t("product.leather welt")}
            </p>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg object-cover object-center">
          <Link to="/leatherboard-welt">
            <img
              className="w-[375px] h-[250px]"
              src="./images/20230628_082425.jpg"
              alt="leatherboard welt"
            />
            <p className="flex font-bold items-center justify-center h-20">
              {t("product.leatherboard welt")}
            </p>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to="/plastic-welt">
            <img
              className="w-full"
              src="./images/20230703_140106.jpg"
              alt="plastic welt"
            />
            <p className="flex font-bold items-center justify-center h-20">
              {t("product.plastic welt")}
            </p>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to="/stacked-leather">
            <img
              className="w-[375px] h-[250px]"
              src="./images/S__4309225.jpg"
              alt="stacked leather"
            />
            <p className="flex font-bold items-center justify-center h-20">
              {t("product.stacked leather")}
            </p>
          </Link>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Link to="/outsole-stock-fitting">
            <img
              className="w-[375px] h-[250px]"
              src="./images/S__4333703.jpg"
              alt="outsole stock fitting"
            />
            <p className="flex font-bold items-center justify-center h-20">
              {t("product.stock fitting")}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
