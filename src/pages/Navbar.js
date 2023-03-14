import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Contactus from "./contactus/Contactus";

export default function Navbar() {
    return (
        <>
            <navbar className="flex bg-beige px-10 h-20 items-center w-full">
                <h1 className="text-4xl font-bold mr-auto">JENG JYI</h1>
                <ul className="flex text-lg">
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/aboutus" className="mr-4">About us</Link>
                    <Link to="/contactus" className="mr-4">Contact us</Link>
                    <Link to="/product" className="mr-4">Product</Link>
                    
                </ul>
            </navbar>

            


        </>
    )
}