import React from "react";
import { Link, Route, Routes } from "react-router-dom";


export default function Navbar(){
    return(
        <>
            <navbar className = "flex bg-beige px-10 h-20 items-center w-full">
                <h1 className="text-4xl font-bold mr-auto">JENG JYI</h1>
                <ul className="flex text-lg">
                    <li className="mr-4"><Link to = "/"></Link>Home</li>
                    <li className="mr-4"><Link to = "/aboutus"></Link>About us</li>
                    <li className="mr-4"><Link to = "/contactus"></Link>Contact us</li>
                    <li className="mr-4"><Link to = "/product"></Link>Product</li>
                </ul>
            </navbar>

            
        </>
    )
}