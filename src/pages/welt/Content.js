import React from "react";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="grid grid-rows-2 gap-5 sm:px-10 leading-relaxed">
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=1"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-10">
          <h1 className="text-2xl pb-2.5">Leather Welt</h1>
          <p className="w-3/4">
            Classic welt made from the finest selection of leather. The premium
            look and feel is an essential element in the overall quality of
            high-end dress shoes and boots.
          </p>
          <Link
            to="/leather-welt"
            className="flex mt-3 w-20 justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Details
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=2"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-10">
          <h1 className="text-2xl pb-2.5">
            Leatherboard Welt (Bonded Leather)
          </h1>
          <p className="w-3/4">
            Leatherboard welt is a economic alternative to leather welt. The
            texture and feel closely mimics that of leather counterpart.
          </p>
          <Link
            to="/leatherboard-welt"
            className="flex mt-3 w-20 justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
