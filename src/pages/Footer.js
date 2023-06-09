import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Contactus from "./Contactus";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <footer className="m-4">
      <div className="w-full md:w-4/5 mx-auto md:py-8">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="./images/jjwelt-logo.png"
              className="h-10 mr-3"
              alt="logo"
            />
            <span className="self-center text-lg md:text-xl lg:text-2xl font-semibold whitespace-nowrap">
              Jeng Jyi
            </span>
          </Link>

          <ul className="flex flex-wrap text-sm font-medium text-gray-500 items-center">
            <li>
              <Link to="/aboutus" className="mr-4 hover:underline md:mr-6">
                {t("about_us.about us")}
              </Link>
            </li>
            <li>
              <button
                className="mr-4 hover:underline md:mr-6"
                onClick={() => setIsOpen(true)}
              >
                {t("contact us")}
              </button>
              <Contactus open={isOpen} onClose={() => setIsOpen(false)} />
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-full" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            Jeng Jyi
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
