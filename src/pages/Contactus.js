import React from "react";

export default function Contactus({ open, onClose }) {
    if (!open) return null
    return (
        <div className="relative z-10" onClick={onClose}>
            <div className="fixed inset-0 overflow-y-auto bg-black/70">
                <div className="flex min-h-full items-center justify-center p-4 text-center" >
                    <div className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Contact Us
                            </h3>
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
                                    onClick={onClose}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}