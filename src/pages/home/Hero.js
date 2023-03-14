import React from "react";

export default function Hero() {
    return (
        <div className="flex mx-16 my-10 items-center rounded-md bg-orange-50">
            <div>
                <img className="column-3" src="./images/jjwelt-logo.png" />
            </div>

            <div className="items-center">
                <h1 className="text-4xl">Jeng Jyi Limited Company</h1>
                <br/>
                <h2 className="text-xl font-medium">Specializing in premium leather components for shoe manufacturing</h2>
                <p className="mt-1.5 text-lg">Our company specializes in leather welts and shoe-related components and has been a trusted supplier 
                    to major global brands since 1989. We operate two factories in strategically located in Guangzhou, China, 
                    and Ho Chi Minh City, Vietnam, enabling us to provide exceptional service and quick turnaround times to our 
                    clients in the shoe-manufacturing industry.</p>
                </div>
        </div>
    )
}