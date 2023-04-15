import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Contactus from "./Contactus";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <footer className="m-4">
                <div className="w-4/5  mx-auto md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to="/" className="flex items-center mb-4 sm:mb-0">
                            <img src="./images/jjwelt-logo.png" className="h-10 mr-3" alt="logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jeng Jyi</span>
                        </Link>

                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/aboutus" className="mr-4 hover:underline md:mr-6">About us</Link>
                            </li>
                            <li>
                                <button
                                    className="mr-4 hover:underline md:mr-6"
                                    onClick={() => setIsOpen(true)}>Contact us
                                </button>
                                <Contactus open={isOpen} onClose={() => setIsOpen(false)} />
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Jeng Jyi</Link>. All Rights Reserved.</span>
                </div>
            </footer>


        </>
    )
}
