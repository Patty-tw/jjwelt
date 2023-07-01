import React from "react";

export default function Gallery() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] my-[45px]">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 justify-items-center lg:px-10">
        <img src="./images/S__4309201.jpg" alt="leather-welt-1" />
        <img src="./images/S__4309203.jpg" alt="leather-welt-3" />
        <img src="./images/S__4309204.jpg" alt="leather-welt-5" />
        <img src="./images/S__4309205.jpg" alt="leather-welt-5" />
        <img src="./images/S__4309206.jpg" alt="leather-welt-5" />
        <img src="./images/S__4309207.jpg" alt="leather-welt-5" />
        <img src="./images/S__4309208.jpg" alt="leather-welt-5" />
        <img src="./images/S__4309209.jpg" alt="leather-welt-5" />
        <img src="./images/S__4309210.jpg" alt="leather-welt-5" />
        <img src="./images/S__4309211.jpg" alt="leather-welt-5" />
      </div>
    </div>
  );
}
