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
            Our company specializes in leather welts and shoe-related components
            and has been a trusted supplier to major global brands since 1989.
            We operate two factories in strategically located in Guangzhou,
            China, and Ho Chi Minh City, Vietnam, enabling us to provide
            exceptional service and quick turnaround times to our clients in the
            shoe-manufacturing industry.
          </p>
        </div>
      </div>
    </>
  );
}
