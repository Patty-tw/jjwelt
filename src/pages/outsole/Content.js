import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <div className="grid md:grid-rows-3 md:gap-10 md:px-5 leading-relaxed">
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=1"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("product.stock fitting")}
          </h1>
          <p className="md:w-4/5">
            Leather, rubber and PU outsole assembly with in-house coloring.
          </p>
          <Link
            to="/outsole-stock-fitting"
            className="flex mt-3 w-[100px] justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {t("details")}
          </Link>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=2"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("product.stacked leather")}
          </h1>
          <p className="md:w-4/5">
            Customized stacked leather based on customer's design. Made with
            finest leather sourced from Italy.
          </p>
          <Link
            to="/stacked-leather"
            className="flex mt-3 w-[100px] justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {t("details")}
          </Link>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:items-center">
        <img
          src="https://picsum.photos/500?random=3"
          alt="dessicant"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px]">
            {t("product.desiccants")}
          </h1>
          <p className="md:w-4/5">
            We supply safe dessicant packs that meets EU standards in various
            sizes packaging.
          </p>
          <Link
            to="/desiccant"
            className="flex mt-3 w-[100px] justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {t("details")}
          </Link>
        </div>
      </div>
    </div>
  );
}
