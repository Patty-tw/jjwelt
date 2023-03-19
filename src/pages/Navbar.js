import React from "react";
import { Dialog, Transition, Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <nav className="flex bg-beige px-10 h-20 items-center w-full">
                <Link to="/" className="text-4xl font-bold mr-auto">JENG JYI</Link>
                <ul className="flex text-lg items-center">
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/aboutus" className="mr-4">About us</Link>
                    <Link to="/product" className="mr-4">Product</Link>
                    <button
                        className="mr-4 bg-teal-700 text-white px-4 py-2 rounded-md ml-5"
                        onClick={openModal}>Contact us</button>
                </ul>
            </nav>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Contact Us
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Name
                                        </label>
                                        <input
                                            className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
                                            type="text"
                                            placeholder="Name"
                                            name="Name"
                                        />
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Email
                                        </label>
                                        <input
                                            className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
                                            type="email"
                                            placeholder="Email"
                                            name="Name"
                                        />
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Enquiry
                                        </label>
                                        <select
                                            name="enquiry"
                                            className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500">
                                            <option>-- Choose --</option>
                                            <option>General Enquiry</option>
                                            <option>Sample request</option>
                                        </select>
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Message
                                        </label>
                                        <input
                                            className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
                                            type="textarea"
                                            placeholder="How can we help?"
                                            name="comment"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}