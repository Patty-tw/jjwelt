import React from "react";

export default function Gallery() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] my-[45px]">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 justify-items-center lg:px-10">
        <img src="./images/20230628_103737.jpg" alt="leather-welt-1" />
        <img src="./images/20230628_103309.jpg" alt="leather-welt-3" />
        <img src="./images/20230628_103437.jpg" alt="leather-welt-5" />
        <img src="./images/20230628_103514.jpg" alt="leather-welt-5" />
        <img src="./images/S__4309083.jpg" alt="leather-welt-5" />

        <img src="./images/20230628_103620.jpg" alt="leather-welt-5" />
        <img src="./images/S__4309081.jpg" alt="leather-welt-6" />
        <img src="./images/S__4309082.jpg" alt="leather-welt-6" />
      </div>
    </div>
  );
}
