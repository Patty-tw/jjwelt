import React from "react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import Contactus from "./Contactus";
import { menuData } from "./navbar/menuData";
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    // const menuItems = menuData.map(menu => {
    //     return <Menu key={menu.id} title={menu.title} url={menu.url} />
    // })


    return (
        <>
            <nav className="flex bg-neutral-400 px-10 h-20 items-center w-full">
                <Link to="/" className="text-4xl font-bold mr-auto">JENG JYI</Link>
                <ul className="flex text-lg items-center">
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/aboutus" className="mr-4">About us</Link>
                    <Menu menuButton={<MenuButton>Product</MenuButton>}>
                        <SubMenu label= {<Link to="/leather" className="mr-4">Welting</Link>} >
                            <MenuItem>
                                <Link to="/leather-welt" className="mr-4">Leather Welt</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/leatherboard-welt" className="mr-4">Leatherborad Welt</Link>
                            </MenuItem>
                        </SubMenu>
                        <MenuItem>
                            <Link to="/plastic-welt" className="mr-4">Plastic Welt</Link>
                        </MenuItem>
                        <SubMenu label={<Link to="/outsole" className="mr-4">Outsole</Link>} >
                            <MenuItem>
                                <Link to="/outsole-stock-fitting" className="mr-4">Stock Fitting</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/stacked-leather" className="mr-4">Stacked Leather</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/desiccant" className="mr-4">Dessicants</Link>
                            </MenuItem>

                        </SubMenu>

                    </Menu>
                    <button
                        className="mr-4 bg-teal-700 text-white px-4 py-2 rounded-md ml-5"
                        onClick={() => setIsOpen(true)} >Contact us
                    </button>
                    <Contactus open={isOpen} onClose={() => setIsOpen(false)} />
                </ul>
            </nav>
        </>
    )
}