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
  const ref = useRef(null);
  const anchorProps = useClick(subOpen, setSubOpen);

  return (
    <>
      <nav className="flex bg-beige px-10 h-20 items-center w-full">
        <Link to="/" className="text-4xl font-bold mr-auto">
          JENG JYI
        </Link>
        <ul className="flex text-lg items-center">
          <Link to="/" className="mr-4">
            Home
          </Link>

          <button
            type="button"
            ref={ref}
            {...anchorProps}
            className="inline-flex justify-center"
          >
            Product
            <ChevronDownIcon
              className="mt-1.5 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
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

          <Link to="/aboutus" className="ml-4">
            About us
          </Link>
          <button
            className="mr-4 bg-teal-700 text-white px-4 py-2 rounded-md ml-5"
            onClick={() => setIsOpen(true)}
          >
            Contact us
          </button>
          <Contactus open={isOpen} onClose={() => setIsOpen(false)} />
        </ul>
      </nav>
    </>
  );
}
