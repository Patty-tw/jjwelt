import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import Contactus from "./Contactus";
import { Menu, MenuItem, MenuButton, SubMenu} from '@szhsin/react-menu';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export default function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <nav className="flex bg-neutral-400 px-10 h-20 items-center w-full">
                <Link to="/" className="text-4xl font-bold mr-auto">JENG JYI</Link>
                <ul className="flex text-lg items-center">
                    <Link to="/" className="mr-4">Home</Link>

                    
                    <Menu menuButton={
                        <MenuButton className="inline-flex justify-center" >Product
                            <ChevronDownIcon className="mt-1.5 -mr-1 h-5 w-5" aria-hidden="true" />
                        </MenuButton>}>

                        <SubMenu label={<Link to="/leather" className="mr-4 text-base">Welting</Link>}>
                            <MenuItem>
                                <Link to="/leather-welt" className="mr-4 text-base">Leather Welt</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/leatherboard-welt" className="mr-4 text-base">Leatherborad Welt</Link>
                            </MenuItem>
                        </SubMenu>

                        <MenuItem>
                            <Link to="/plastic-welt" className="mr-4 text-base">Plastic Welt</Link>
                        </MenuItem>

                        <SubMenu label={<Link to="/outsole" className="mr-4 text-base">Outsole</Link>} >
                            <MenuItem>
                                <Link to="/outsole-stock-fitting" className="mr-4 text-base">Stock Fitting</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/stacked-leather" className="mr-4 text-base">Stacked Leather</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/desiccant" className="mr-4 text-base">Dessicants</Link>
                            </MenuItem>
                        </SubMenu>

                    </Menu>

                    <Link to="/aboutus" className="mr-4 ml-4">About us</Link>
                    <button
                        className="mr-4 bg-teal-700 text-white px-4 py-2 rounded-md ml-5"
                        onClick={() => setIsOpen(true)} >Contact us
                    </button>
                    <Contactus open={isOpen} onClose={() => setIsOpen(false)} />
                </ul>
            </nav >
        </>
    )
}