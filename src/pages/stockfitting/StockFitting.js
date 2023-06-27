import React from "react";
import { useTranslation } from "react-i18next";

export default function StockFitting() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] mt-10 mb-10">
        {t("stock_fitting.women")}
      </h1>
      <div className="grid grid-cols-auto-fit gap-10 p-10 justify-items-center">
        <img src="https://picsum.photos/500?random=10" alt="outsole" />
        <img src="https://picsum.photos/500?random=10" alt="outsole" />
        <img src="https://picsum.photos/500?random=10" alt="outsole" />
        <img src="https://picsum.photos/500?random=10" alt="outsole" />
        <img src="https://picsum.photos/500?random=10" alt="outsole" />
        <img src="https://picsum.photos/500?random=10" alt="outsole" />
        <img src="https://picsum.photos/500?random=10" alt="outsole" />
        <img src="https://picsum.photos/500?random=10" alt="outsole" />
      </div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] mt-10 mb-10">
        {t("stock_fitting.men")}
      </h1>
      <div className="grid grid-cols-auto-fit gap-10 p-10 justify-items-center">
        <img src="./images/20230627_085445.jpg" alt="outsole1" />
        <img src="./images/20230627_090902.jpg" alt="outsole2" />
        <img src="./images/20230627_090320.jpg" alt="outsole3" />
        <img src="./images/20230627_085430.jpg" alt="outsole4" />
      </div>
    </div>
  );
}
