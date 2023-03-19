import React from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
    
    return (
        <div className="grid grid-cols-auto-fit space-x-1 px-16">
            <div className="relative overflow-hidden border border-amber-700">
                <img
                    className="block w-full h-full aspect-square object-cover object-center ease-in-out duration-200 "
                    src="./images/leather-welt.jpg" alt="leather welt" />
                <Link to="/leather-welt" className="flex absolute inset-0 justify-center items-center text-4xl font-semibold opacity-0 hover:opacity-100 hover:backdrop-blur-sm">Lether Welt</Link>

            </div>
            <div className="relative overflow-hidden border border-amber-700">
                <img
                    className="block w-full h-full aspect-square object-cover object-center"
                    src="./images/plastic-welt.jpg" alt="leather welt" />
                <Link to="/leather-welt" className="flex absolute inset-0 justify-center items-center text-4xl font-semibold opacity-0 hover:opacity-100 hover:backdrop-blur-sm">Plastic Welt</Link>
                
            </div>
            <div className="relative overflow-hidden border border-amber-700">
                <img
                    className="block w-full h-full aspect-square object-cover object-center hover:blur-sm"
                    src="./images/stacked-leather.gif" alt="leather welt" />
                <Link to="/leather-welt" className="flex absolute inset-0 justify-center items-center text-4xl font-semibold opacity-0 hover:opacity-100 hover:backdrop-blur-sm">Stacked Welt</Link>
            </div>
            <div className="relative overflow-hidden border border-amber-700">
                <img
                    className="block w-full h-full aspect-square object-cover object-center hover:blur-sm"
                    src="./images/orangecolor outsole.jpg" alt="outsole stock fitting" />
                <Link to="/leather-welt" className="flex absolute inset-0 justify-center items-center text-4xl font-semibold opacity-0 hover:opacity-100 hover:backdrop-blur-sm">Outsole Stock Fitting</Link>
            </div>
            <div className="relative overflow-hidden border border-amber-700">
                <img
                    className="block w-full h-full aspect-square object-cover object-center hover:blur-sm"
                    src="./images/desiccant.jpg" alt="outsole stock fitting" />
                <Link to="/leather-welt" className="flex absolute inset-0 justify-center items-center text-4xl font-semibold opacity-0 hover:opacity-100 hover:backdrop-blur-sm">Desiccant</Link>
            </div>
        </div>
    )
}