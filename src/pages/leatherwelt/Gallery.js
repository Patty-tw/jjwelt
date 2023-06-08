import React from "react";

export default function Gallery() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] my-[45px]">
        Gallery
      </h1>
      <div className="grid grid-cols-auto-fit gap-10  justify-items-center">
        <img src="https://picsum.photos/500?random=1" alt="outsole" />
        <img src="https://picsum.photos/500?random=1" alt="outsole" />
        <img src="https://picsum.photos/500?random=1" alt="outsole" />
        <img src="https://picsum.photos/500?random=1" alt="outsole" />
        <img src="https://picsum.photos/500?random=1" alt="outsole" />
        <img src="https://picsum.photos/500?random=1" alt="outsole" />
        <img src="https://picsum.photos/500?random=1" alt="outsole" />
        <img src="https://picsum.photos/500?random=1" alt="outsole" />
      </div>
    </div>
  );
}
