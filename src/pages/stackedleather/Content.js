import React from "react";

export default function Content() {
    return (
        <div className="grid grid-rows-4 gap-5">
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=1" alt="dessicant" className="mx-auto" />
                <div className="my-auto">
                    <h1 className="text-3xl">Raw Material</h1>
                    <p className="">We start with highest quality vegetable tanned leather sourced directly and only from major tanneries in Italy.
                        All our raw materials have been tested. Test reports can be provided upon request.</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=2" alt="dessicant" className="mx-auto" />
                <div className="my-auto mx-auto">
                    <h1 className="text-3xl">
                        Colors</h1>
                    <p className="">We stock multiple colors of raw material which includes Black, Brown, Natural and White.
                        We source our brown and natural color from three different tanneries each as we there are slight variation
                        in tone. We understand this subtle difference will affect the results and we will choose one that most closely
                        resembles what our customers try to achieve.</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=3" alt="dessicant" className="mx-auto" />
                <div className="my-auto mx-auto">
                    <h1 className="text-3xl">Customization</h1>
                    <p className="">Our experienced technicians carefully craft the leather pieces base on the heel samples provided.
                        We have over 25 years of experience and whether customer are seeking simple heels like kitten and pumps heels or more complicated wedge
                        and stiletto heels, we are sure our company can meet customers' demands.</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=4" alt="dessicant" className="mx-auto" />
                <div className="my-auto mx-auto">
                    <h1 className="text-3xl">
                        Quality Outcome</h1>
                    <p className="">With our in-house coloring and finishing, our company are able to provide even the most complicated designs customers.
                        From two color leather heel covers to vertical-arranged heel covers, we are open and always seeking new ways to create more designs.</p>
                </div>
            </div>
        </div>

    )
}