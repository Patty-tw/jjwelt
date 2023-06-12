import React from "react";
import { useTranslation } from "react-i18next";

export default function Language() {
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }
  return (
    <nav className="flex flex-row-reverse px-4 py-2 gap-4">
      <button onClick={changeLanguage} value="en">
        English
      </button>
      <button onClick={changeLanguage} value="cn">
        繁體中文
      </button>
    </nav>
  );
}
