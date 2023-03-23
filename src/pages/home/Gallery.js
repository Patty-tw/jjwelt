import React from "react";
import { Link } from "react-router-dom";

export default function Gallery() {

    return (
        <div>
            <h1 className="text-center md:text-2xl lg:text-4xl mt-10 mb-10">Products</h1>
            <div className="grid grid-cols-auto-fit p-10 gap-10">
                <div className="max-w-sm rounded overflow-hidden shadow-lg object-cover object-center" >
                    <img
                        className="w-full"
                        src="https://picsum.photos/500?random=1" alt="leather welt" />
                    <Link to="/leather-welt" className="flex font-bold text-xl items-center justify-center">Leather Welt</Link>

                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src="https://picsum.photos/500?random=2" alt="plastic welt" />
                    <Link to="/plastic-welt" className="flex font-bold text-xl items-center justify-center">Plastic Welt</Link>

                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src="https://picsum.photos/500?random=3" alt="stacked welt" />
                    <Link to="/stacked-welt" className="flex font-bold text-xl items-center justify-center">Stacked Welt</Link>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src="https://picsum.photos/500?random=4" alt="outsole stock fitting" />
                    <Link to="/outsole-stock-fitting" className="flex font-bold text-xl items-center justify-center">Outsole Stock Fitting</Link>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src="https://picsum.photos/500?random=5" alt="desiccant" />
                    <Link to="/desiccant" className="flex font-bold text-xl items-center justify-center">Desiccant</Link>
                </div>
            </div>
        </div>
    )
}