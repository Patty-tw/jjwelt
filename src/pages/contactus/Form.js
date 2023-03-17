import React from "react";
import { useFormik } from "formik";

export default function Form() {
    const formik = useFormik({
        initialValues: {
            enquiry: "--Choose--",
            firstName: "",
            lastName: "",
            email: "",
            comment: "",
        }
    })

    console.log(formik.values)

    return (
        <form className="container w-9/12 mt-24 mr-auto ml-auto relative h-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Enquiry
                    </label>
                    <select 
                        value={formik.values.enquiry}
                        onChange = {formik.handleChange}
                        name = "enquiry"
                        className="w-full border-2 border-gray-500 p-2 rounded-md focus:border-teal-500 focus:ring-teal-500 mb-3 py-3 px-4">
                        <option>-- Choose --</option>
                        <option>General Enquiry</option>
                        <option>Sample request</option>
                    </select>
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        placeholder="First Name"
                        onChange={formik.handleChange}
                        name="firstName"
                        value={formik.values.firstName}
                    />
                </div>

                <div className="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        placeholder="Last Name"
                        onChange={formik.handleChange}
                        name="lastName"
                        value={formik.values.lastName}
                    />
                </div>

                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        name="email"
                        value={formik.values.email}
                    />
                </div>
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Message
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="textarea"
                        placeholder="How can we help?"
                        onChange={formik.handleChange}
                        name="comment"
                        value={formik.values.comment}
                    />
                </div>
            </div>

            <div className="flex px-3 justify-center">
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-4 ">Submit</button>
            </div>

        </form>

    )
}