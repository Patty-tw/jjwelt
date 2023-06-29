import React from "react";

export default function Gallery() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] my-[45px]">
        Gallery
      </h1>
      <div className="grid grid-cols-auto-fit gap-10 justify-items-center lg:px-10 ">
        <img
          src="./images/20230629_140349(0).jpg"
          alt="leatherboard_1"
          className="aspect-square object-center"
        />
        <img
          src="./images/20230629_140420.jpg"
          alt="leatherboard_1"
          className="aspect-square object-center"
        />
        <img
          src="./images/20230629_140420.jpg"
          alt="leatherboard_1"
          className="aspect-square object-center"
        />
        <img
          src="./images/20230629_140420.jpg"
          alt="leatherboard_1"
          className="aspect-square object-center"
        />
        <img
          src="./images/20230629_140420.jpg"
          alt="leatherboard_1"
          className="aspect-square object-center"
        />
      </div>
    </div>
  );
}
