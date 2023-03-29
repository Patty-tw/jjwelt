import React from "react";
import { Link } from "react-router-dom";

export default function Gallery() {

    return (
        <div>
            <h1 className="text-center md:text-2xl lg:text-4xl mt-10 mb-10">Products</h1>
            <div className="grid grid-cols-auto-fit gap-10 p-10">
                <div className="max-w-sm rounded overflow-hidden shadow-lg object-cover object-center" >
                    <img
                        className="w-full"
                        src="https://picsum.photos/500?random=1" alt="leather welt" />
                    <Link to="/leather-welt" className="flex font-bold text-xl items-center justify-center h-20">Leather Welt</Link>

                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src="https://picsum.photos/500?random=6" alt="leatherboard welt" />
                    <Link to="/plastic-welt" className="flex font-bold text-xl items-center justify-center h-20">Leatherboard Welt</Link>

                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src="https://picsum.photos/500?random=2" alt="plastic welt" />
                    <Link to="/plastic-welt" className="flex font-bold text-xl items-center justify-center h-20">Plastic Welt</Link>

                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src="https://picsum.photos/500?random=3" alt="stacked leather" />
                    <Link to="/stacked-leather" className="flex font-bold text-xl items-center justify-center h-20">Stacked Leather</Link>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src="https://picsum.photos/500?random=4" alt="outsole stock fitting" />
                    <Link to="/outsole-stock-fitting" className="flex font-bold text-xl items-center justify-center h-20">Outsole Stock Fitting</Link>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src="https://picsum.photos/500?random=5" alt="desiccant" />
                    <Link to="/desiccant" className="flex font-bold text-xl items-center justify-center h-20">Desiccant</Link>
                </div>
            </div>
        </div>
    )
}