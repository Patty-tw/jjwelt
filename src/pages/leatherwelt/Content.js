import React from "react";

export default function Content() {
    return (
        <div className="grid grid-rows-4 gap-5 sm:px-5">
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=5" alt="dessicant" className="mx-auto" />
                <div className="my-auto sm:ml-5">
                    <h1 className="text-3xl">Premium vegetable tanned leather sourced from around the world</h1>
                    <p className="w-3/4">Our company understands the color tone variations in leather from different regions.
                        To be able to meet customer demands, our factory carries highest quality leather from Italy, Argentina
                        and Brazil to satisfy all product styles.</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=1" alt="dessicant" className="mx-auto" />
                <div className="my-auto sm:ml-5">
                    <h1 className="text-3xl">
                        Professional machinery from Italy</h1>
                    <p className="w-3/4">All our machines are imported from Italy, ensuring highest possible craftsmanship.</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=2" alt="dessicant" className="mx-auto" />
                <div className="my-auto sm:ml-5">
                    <h1 className="text-3xl">
                        Precision machines imported from Italy</h1>
                    <p className="w-3/4">As with our leather welts, all bonded leather welt are manufactured and process with the same set of machines 100% from Italy.</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=3" alt="dessicant" className="mx-auto" />
                <div className="my-auto sm:ml-5">
                    <h1 className="text-3xl">
                        Customization according to requests</h1>
                    <p className="w-3/4">Our experienced technicians can accommodate a variety of designs with endless possibilities. Goodyear, wheeling, pre-stitching,
                        color, antiquing effects and many other special effects can be achieved in-house.</p>
                </div>
            </div>
        </div>

    )
}