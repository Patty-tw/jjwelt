import React from "react";

export default function Hero() {
    return (
        <div className="flex items-center rounded-md w-4/5 mr-auto ml-auto md:px-20 lg:px-40 py-16">
            {/* <div>
                <img className="column-3" src="./images/jjwelt-logo.png" alt="logo" />
            </div> */}

            <div className="items-center">
                <h1 className="text-6xl font-bold">Jeng Jyi Limited Company</h1>
                <br />
                <h2 className="text-4xl font-medium">Specializing in premium leather components for shoe manufacturing</h2>
                <p className="mt-1.5 text-2xl">Our company specializes in leather welts and shoe-related components and has been a trusted supplier
                    to major global brands since 1989. We operate two factories in strategically located in Guangzhou, China,
                    and Ho Chi Minh City, Vietnam, enabling us to provide exceptional service and quick turnaround times to our
                    clients in the shoe-manufacturing industry.</p>
            </div>
        </div>
    )
}