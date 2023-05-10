import React from "react";

export default function Hero() {
  return (
    <>
      <div className="bg-home-banner p-20 bg-cover bg-center">
        <div className="items-center w-4/5 m-auto p-10 bg-white">
          <h1 className="text-4xl font-medium text-center">
            About Our Company
          </h1>
          <br />
          <p className="m-3 text-xl text-center mx-auto md:max-w-md lg:max-w-2xl">
            Since 1989, our company has been a trusted supplier of leather welts
            and shoe-related components to major global brands. With two
            strategically located factories in Guangzhou, China, and Ho Chi Minh
            City, Vietnam, we are committed to providing exceptional service and
            quick turnaround times to our clients in the shoe-manufacturing
            industry.
          </p>
        </div>
      </div>
    </>
  );
}
