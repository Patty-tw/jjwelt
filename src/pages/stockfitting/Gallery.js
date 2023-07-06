import React from "react";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] mt-10 mb-10">
        {t("stock_fitting.women")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 justify-items-center lg:px-10">
        <img src="./images/20230627_104048.jpg" alt="outsole1" />
        <img src="./images/20230627_104151.jpg" alt="outsole2" />
        <img src="./images/20230627_104316.jpg" alt="outsole3" />
        <img src="./images/S__4309135.jpg" alt="outsole4" />
        <img src="./images/S__4309143.jpg" alt="outsole4" />
      </div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] mt-10 mb-10">
        {t("stock_fitting.men")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 justify-items-center lg:px-10">
        <img src="./images/20230627_085445.jpg" alt="outsole1" />
        <img src="./images/20230627_090902.jpg" alt="outsole2" />
        <img src="./images/20230627_090320.jpg" alt="outsole3" />
        <img src="./images/20230627_085430.jpg" alt="outsole4" />
        {/* <img src="./images/20230627_090504.jpg" alt="outsole5" /> */}
        <img src="./images/20230627_103832.jpg" alt="outsole6" />
        <img src="./images/20230627_103702.jpg" alt="outsole7" />
        <img src="./images/S__4309144.jpg" alt="outsole7" />
        <img src="./images/S__4309146.jpg" alt="outsole7" />
        <img src="./images/S__4309147.jpg" alt="outsole7" />
        <img src="./images/S__4309148.jpg" alt="outsole7" />
        <img src="./images/bsoJOgBIPSETltX.png" alt="outsole7" />
      </div>
    </div>
  );
}
