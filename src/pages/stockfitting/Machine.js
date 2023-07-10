import React from "react";

export default function Machine() {
  return (
    <div>
      <h1 className="text-center text-2xl md:text-[26px] lg:text-[30px] mt-10 mb-10">
        Machine
      </h1>
      <div className="md:grid md:grid-cols-4 gap-10 px-10">
        <div className="md:col-span-2 md:h-[550px] mb-10 md:mb-0">
          <h1 className="text-xl">CNC 自動切割挖槽機</h1>
          <video controls className="h">
            <source src="./images/machine-1.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div>
          <h1 className="text-xl">半自動磨邊機</h1>
          <video controls className="md:h-[525px] mb-10 md:mb-0">
            <source src="./images/machine-2.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div>
          <h1 className="text-xl">自動磨邊機</h1>
          <video controls className="md:h-[525px] mb-10 md:mb-0">
            <source src="./images/machine-3.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}
