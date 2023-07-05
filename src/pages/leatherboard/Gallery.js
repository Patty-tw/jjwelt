import React from "react";

export default function Gallery() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] my-[45px]">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 justify-items-center lg:px-10">
        <img src="./images/20230628_102351.jpg" alt="leatherboard_1" />
        <img src="./images/20230628_103033.jpg" alt="leatherboard_2" />
        <img src="./images/20230628_102547.jpg" alt="leatherboard_4" />
        <img src="./images/20230628_101008.jpg" alt="leatherboard_4" />
        <img src="./images/20230628_102214.jpg" alt="leatherboard_4" />
        <img src="./images/20230628_102934.jpg" alt="leatherboard_3" />
      </div>
    </div>
  );
}
