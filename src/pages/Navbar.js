import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Contactus from "./Contactus";
import { Menu, Transition } from "@headlessui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between md:items-center md:h-[3.375rem] lg:h-16">
        <Link to="/" className="text-4xl font-bold flex px-4 py-4 md:py-0">
          JENG JYI
        </Link>

        {/* <div className="lg:hidden w-full">
          <div className="h-[86px] flex items-center justify-between border-2 border-blue-900">
            <div className="gap-y-1 flex flex-col"></div>
          </div>
        </div> */}

        <div className="lg:block hidden leading-relaxed">
          <ul className="text-sm lg:flex lg:items-center  gap-x-6">
            <Link to="/" className="flex py-2 pr-4 text-base font-medium">
              Home
            </Link>
            <Link
              to="/plastic-welt"
              className="flex py-2 text-base font-medium"
            >
              Plastic Welt
            </Link>

            <div className="flex ">
              <Menu as="div" className="relative text-left items-center">
                <div>
                  <Menu.Button className="text-base font-medium inline-flex w-full justify-center rounded-md px-4 py-2">
                    Welting
                    <div className="ml-1 my-auto rounded-sm border-current border-l-transparent border-r-transparent border-t-[5px] border-l-[5px] border-r-[5px]"></div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="text-base font-medium absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : "text-gray-900"
                            } group flex w-full  rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Overview
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : "text-gray-900"
                            } group flex w-full rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Leather Welt
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : "text-gray-900"
                            } group flex w-full rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Leatherboard Welt
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="flex">
              <Menu
                as="div"
                className="relative inline-block text-left text-base font-medium "
              >
                <div>
                  <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Outsole
                    <div className="ml-1 my-auto rounded-sm border-current border-l-transparent border-r-transparent border-t-[5px] border-l-[5px] border-r-[5px]"></div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : "text-gray-900"
                            } group flex w-full rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Overview
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : "text-gray-900"
                            } group flex w-full rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Stock Fitting
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : "text-gray-900"
                            } group flex w-full rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Stacked Leather
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : "text-gray-900"
                            } group flex w-full rounded-md px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <button
                                className="mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                            Desiccants
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

            <Link to="/aboutus" className="flex py-2 text-base font-medium ">
              About us
            </Link>
          </ul>
        </div>
        <div className="lg:block hidden leading-relaxed">
          <div className="flex lg:mr-4 text-base font-medium bg-teal-700 text-white px-4 rounded-md justify-center leading-6 h-10 border-0">
            <button onClick={() => setIsOpen(true)}>Contact us</button>
            <Contactus open={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      </nav>
    </>
  );
}
