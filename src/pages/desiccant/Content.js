import React from "react";

export default function Content() {
    return (
        <>
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=1" alt="dessicant" />
                <div>
                    <h1>Raw Material</h1>
                    <p className="">Our silica gel is Directive 2011/65/EU certified and does not contain Lead, Mercury, Cadmium and hazardous materials set by RoHS.</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=2" alt="dessicant" />
                <div>
                    <h1>Various sizes and packing</h1>
                    <p className="">Sizes: We are able to produce sizes ranging from 1g, 2g, 3G, 4G, 5g, 6g, 10g, 20g, 30g, 50g, 100g, 200g, 500g, 1000g.

                        Packing material: Compound paper, filter paper, non-woven paper.

                        Printed Text: We have a wide selection of languages printed on the packing which includes English, Chinese, French, German etc.


                        Ordering Info: Minimum order is 10000 pieces, increments of 100.
                        Rate: $60/10000pcs(3g) , negotiable with volume.</p>
                </div>
            </div>
        </>

    )
}