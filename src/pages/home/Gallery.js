import React from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div>
      <h1 className="text-2xl pb-2.5 md:text-[26px] lg:text-[30px] text-center mt-10 md:mb-10">
        Products
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
              Leather Welt
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
              Leatherboard Welt
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
              Plastic Welt
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
              Stacked Leather
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
              Outsole Stock Fitting
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
              Desiccant
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
