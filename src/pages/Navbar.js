import React from "react";
import { Link} from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <navbar className="flex bg-beige px-10 h-20 items-center w-full">
                <Link to="/" className="text-4xl font-bold mr-auto">JENG JYI</Link>
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