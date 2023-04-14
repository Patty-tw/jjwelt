import React from "react";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <footer className="m-4">
                <div className="w-4/5  mx-auto md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to="/" className="flex items-center mb-4 sm:mb-0">
                            <img src="./images/jjwelt-logo.png" className="h-10 mr-3" alt="logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jeng Jyi</span>
                        </Link>

                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <Link to="/aboutus" className="mr-4 hover:underline md:mr-6">About us</Link>
                            </li>
                            <li>
                                <button
                                    className="mr-4 hover:underline md:mr-6"
                                    onClick={openModal}>Contact us
                                </button>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Jeng Jyi</Link>. All Rights Reserved.</span>
                </div>
            </footer>

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
                                            className="mb-2 border-2 border-gray-500 p-2 rounded-md w-full focus:outline-none focus:border-teal-500 focus:ring-teal-500"
                                            type="text"
                                            placeholder="Name"
                                            name="Name"
                                        />
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Email
                                        </label>
                                        <input
                                            className="mb-2 border-2 border-gray-500 p-2 rounded-md w-full focus:outline-none focus:border-teal-500 focus:ring-teal-500"
                                            type="email"
                                            placeholder="Email"
                                            name="Name"
                                        />
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Enquiry
                                        </label>
                                        <select
                                            name="enquiry"
                                            className="mb-2 border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500">
                                            <option>-- Choose --</option>
                                            <option>General Enquiry</option>
                                            <option>Sample request</option>
                                        </select>
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Message
                                        </label>
                                        <input
                                            className="border-2 border-gray-500 p-2 rounded-md w-full focus:outline-none focus:border-teal-500 focus:ring-teal-500"
                                            type="textarea"
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
