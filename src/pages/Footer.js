import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0">
                        <img src="./images/jjwelt-logo.png" className="h-20 mr-3" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jeng Jyi</span>
                    </Link>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/aboutus" className="mr-4 hover:underline md:mr-6">About us</Link>
                        </li>
                        <li>
                            <Link to="/aboutus" className="mr-4 hover:underline md:mr-6">Contact us</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Jeng Jyi</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
