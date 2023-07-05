import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();
  return (
    <div className="grid md:grid-rows-2 md:gap-10 md:px-5 leading-relaxed mt-10">
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
            className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
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
      {/* <div className="md:grid md:grid-cols-2 md:items-center">
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
      </div> */}
    </div>
  );
}
