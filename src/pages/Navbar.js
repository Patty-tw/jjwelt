import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contactus from "./Contactus";
import {
  MenuItem,
  SubMenu,
  ControlledMenu,
  useClick,
} from "@szhsin/react-menu";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const ref = useRef(null);
  const anchorProps = useClick(subOpen, setSubOpen);

  return (
    <>
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="text-4xl font-bold mr-auto flex items-center">
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
          <ul className="text-sm lg:flex lg:items-center">
            <Link to="/" className="flex py-2 pr-4 ">
              Home
            </Link>

            <button
              type="button"
              ref={ref}
              {...anchorProps}
              className="inline-flex justify-center py-2 pr-4"
            >
              Product
              <svg
                className="w-5 h-5 ml-1 mt-0.5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
              </svg>
            </button>

            <ControlledMenu
              state={subOpen ? "open" : "closed"}
              anchorRef={ref}
              onClose={() => {
                setSubOpen(false);
              }}
              onClick={() => {
                setSubOpen(false);
              }}
            >
              <SubMenu
                label={
                  <Link to="/leather" className="mr-4 text-base">
                    Welting
                  </Link>
                }
              >
                <MenuItem>
                  <Link to="/leather-welt" className="mr-4 text-base">
                    Leather Welt
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/leatherboard-welt" className="mr-4 text-base">
                    Leatherborad Welt
                  </Link>
                </MenuItem>
              </SubMenu>

              <MenuItem>
                <Link to="/plastic-welt" className="mr-4 text-base">
                  Plastic Welt
                </Link>
              </MenuItem>

              <SubMenu
                label={
                  <Link to="/outsole" className="mr-4 text-base">
                    Outsole
                  </Link>
                }
              >
                <MenuItem>
                  <Link to="/outsole-stock-fitting" className="mr-4 text-base">
                    Stock Fitting
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/stacked-leather" className="mr-4 text-base">
                    Stacked Leather
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/desiccant" className="mr-4 text-base">
                    Dessicants
                  </Link>
                </MenuItem>
              </SubMenu>
            </ControlledMenu>

            <Link to="/aboutus" className="flex py-2 pr-4 ">
              About us
            </Link>
            <button
              className="lg: mr-4 bg-teal-700 text-white px-4 py-2 rounded-md  inline-flex items-center border-0 mt-4 md:mt-0"
              onClick={() => setIsOpen(true)}
            >
              Contact us
            </button>
            <Contactus open={isOpen} onClose={() => setIsOpen(false)} />
          </ul>
        </div>
      </nav>
    </>
  );
}
