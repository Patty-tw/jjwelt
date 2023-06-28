import React from "react";

export default function Gallery() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] my-[45px]">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 justify-items-center lg:px-10">
        <img
          src="./images/leather-welt-1.jpg"
          alt="leather-welt-4"
          className=" aspect-square object-scale-down"
        />
        <img
          src="./images/leather-welt-2.jpg"
          alt="leather-welt-2"
          className="rotate-90 aspect-square object-scale-down"
        />
        <img
          src="./images/leather-welt-3.jpg"
          alt="leather-welt-3"
          className="rotate-90 aspect-square object-scale-down"
        />
        <img
          src="./images/leather-welt-4.jpg"
          alt="leather-welt-4"
          className="rotate-90 aspect-square object-scale-down"
        />
      </div>
    </div>
  );
}
