import React from "react";
import { useTranslation } from "react-i18next";

export default function Contactus({ open, onClose }) {
  const { t } = useTranslation();

  if (!open) return null;
  return (
    <div className="relative z-10" onClick={onClose}>
      <div className="fixed inset-0 overflow-y-auto bg-black/70">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <div
            className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {t("contact us")}
              </h3>
              <div className="mt-2">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  {t("contact_us_form.name")}
                </label>
                <input
                  className="mb-2 border-2 border-gray-500 p-2 rounded-md w-full focus:outline-none focus:border-teal-500 focus:ring-teal-500"
                  type="text"
                  placeholder={t("contact_us_form.name")}
                  name="Name"
                />
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  {t("contact_us_form.email")}
                </label>
                <input
                  className="mb-2 border-2 border-gray-500 p-2 rounded-md w-full focus:outline-none focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  placeholder={t("contact_us_form.email")}
                  name="Name"
                />
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  {t("contact_us_form.enquiry")}
                </label>
                <select
                  name="enquiry"
                  className="mb-2 border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 text-black"
                >
                  <option>-- Choose --</option>
                  <option>General Enquiry</option>
                  <option>Sample request</option>
                </select>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  {t("contact_us_form.message")}
                </label>
                <textarea
                  className="border-2 border-gray-500 p-2 rounded-md w-full focus:outline-none focus:border-teal-500 focus:ring-teal-500"
                  name="message"
                  rows={2}
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={onClose}
                >
                  {t("contact_us_form.submit")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
