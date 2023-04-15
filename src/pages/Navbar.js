import React from "react";
import { Transition, Menu } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";
import Contactus from "./Contactus";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <nav className="flex bg-neutral-400 px-10 h-20 items-center w-full">
                <Link to="/" className="text-4xl font-bold mr-auto">JENG JYI</Link>
                <ul className="flex text-lg items-center">
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/aboutus" className="mr-4">About us</Link>

                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5">Product
                            <ChevronDownIcon className="mt-1 -mr-1 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/leather"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Leather
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/plastic-welt"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Plastic Welt
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/stacked-leather"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Stacked Leather
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/outsole"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Outsole
                                            </Link>
                                        )}
                                    </Menu.Item>

                                </div>
                            </Menu.Items>
                        </Transition>
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