import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contactus from "./Contactus";
import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <nav className="relative flex flex-wrap justify-between items-center md:h-[3.375rem] md:flex-row lg:h-16 z-10">
      <Link to="/" className=" text-4xl font-bold flex px-4 py-4 md:py-0">
        JENG JYI
      </Link>

      <div className="block lg:hidden">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${navOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${navOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full block lg:flex lg:items-center lg:w-auto ${
          navOpen ? "block" : "hidden"
        }`}
      >
        <ul className="px-4 py-2 lg:text-lg lg:flex lg:items-center lg:gap-x-14 leading-relaxed">
          <Link to="/" className="flex py-2">
            {t("home")}
          </Link>
          <Link to="/plastic-welt" className="flex py-2">
            {t("plastic welt")}
          </Link>
          <div>
            <Menu>
              {({ open }) => (
                <>
                  <div className="relative inline-block text-left">
                    <Menu.Button className="inline-flex w-full justify-center rounded-md py-2">
                      {t("welting")}
                      <div
                        className={
                          open
                            ? "ml-1 my-auto rounded-sm border-current border-l-transparent border-r-transparent border-t-[5px] border-l-[5px] border-r-[5px]  rotate-180 duration-300"
                            : "ml-1 my-auto rounded-sm border-current border-l-transparent border-r-transparent border-t-[5px] border-l-[5px] border-r-[5px] duration-300"
                        }
                      ></div>
                    </Menu.Button>
                  </div>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {open && (
                      <Menu.Items className="w-full lg:absolute lg:right-0 lg:mt-2 lg:w-56 divide-y divide-gray-100 rounded-md bg-white lg:shadow-lg">
                        <div className="px-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/welting"
                                className={`${
                                  active ? "bg-gray-100" : "text-gray-900"
                                } group flex w-full rounded-md px-2 py-2 text-sm`}
                              >
                                {t("overview")}
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/leather-welt"
                                className={`${
                                  active ? "bg-gray-100" : "text-gray-900"
                                } group flex w-full rounded-md px-2 py-2 text-sm`}
                              >
                                {t("leather welt")}
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/leatherboard-welt"
                                className={`${
                                  active ? "bg-gray-100" : "text-gray-900"
                                } group flex w-full rounded-md px-2 py-2 text-sm`}
                              >
                                {t("leatherboard welt")}
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    )}
                  </Transition>
                </>
              )}
            </Menu>
          </div>
          <div>
            <Menu>
              {({ open }) => (
                <>
                  <div className="relative inline-block text-left">
                    <Menu.Button className="inline-flex w-full justify-center rounded-md py-2">
                      {t("outsole")}
                      <div
                        className={
                          open
                            ? "ml-1 my-auto rounded-sm border-current border-l-transparent border-r-transparent border-t-[5px] border-l-[5px] border-r-[5px] rotate-180 duration-300"
                            : "ml-1 my-auto rounded-sm border-current border-l-transparent border-r-transparent border-t-[5px] border-l-[5px] border-r-[5px] duration-300"
                        }
                      ></div>
                    </Menu.Button>
                  </div>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className=" w-full lg:absolute lg:right-0 lg:mt-2 lg:w-56 divide-y divide-gray-100 rounded-md bg-white lg:shadow-lg">
                      <div className="py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/outsole"
                              className={`${
                                active ? "bg-gray-100" : "text-gray-900"
                              } group flex w-full rounded-md px-2 py-2 text-sm`}
                            >
                              {t("overview")}
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/outsole-stock-fitting"
                              className={`${
                                active ? "bg-gray-100" : "text-gray-900"
                              } group flex w-full rounded-md px-2 py-2 text-sm`}
                            >
                              {t("stock fitting")}
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/stacked-leather"
                              className={`${
                                active ? "bg-gray-100" : "text-gray-900"
                              } group flex w-full rounded-md px-2 py-2 text-sm`}
                            >
                              {t("stacked leather")}
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/desiccant"
                              className={`${
                                active ? "bg-gray-100" : "text-gray-900"
                              } group flex w-full rounded-md px-2 py-2 text-sm`}
                            >
                              {t("desiccants")}
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>

          <Link to="/aboutus" className="flex py-2">
            {t("about us")}
          </Link>
          <div className="lg:hidden inline-flex lg:mr-4   bg-teal-700 text-white px-4 rounded-md justify-center leading-6 h-10 border-0">
            <button onClick={() => setIsOpen(true)}>Contact us</button>
            <Contactus open={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        </ul>
      </div>
      <div className="hidden lg:block leading-relaxed py-2">
        <div className="flex lg:mr-4  bg-teal-700 text-white px-4 rounded-md justify-center leading-6 h-10 border-0">
          <button onClick={() => setIsOpen(true)}>{t("contact us")}</button>
          <Contactus open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
}
