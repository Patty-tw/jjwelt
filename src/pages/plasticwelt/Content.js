import React from "react";

export default function Content() {
  return (
    <div className="grid grid-rows-4 gap-5 leading-relaxed">
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=1"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5">Raw Material</h1>
          <p className="w-3/4">
            All our raw materials are tested and conform to the standard set by
            EU testing requirements, EN 71-3:2013. We stock PVC, TPR, TR, TPU,
            Rubber materials ready to accommodate customers' needs.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=2"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5">PVC Welt</h1>
          <p className="w-3/4">
            We use only environmental-friendly PVC raw material for our welt.
            PVC welt is lowest in price among other plastic materials.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=3"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5">TR, TPR, TPU Welt</h1>
          <p className="w-3/4">
            Our company stock a wide variety of materials to dedicate to each
            customer's needs.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <img
          src="https://picsum.photos/500?random=4"
          alt="dessicant"
          className="mx-auto"
        />
        <div className="my-auto sm:ml-5">
          <h1 className="text-2xl pb-2.5">
            Multi-color welt and Combination welt
          </h1>
          <p className="w-3/4">
            Our in-house mold shop and our experience allow us to produce
            multi-color welt through co-extrusion. Our company is able to
            produce 2-color, 3-color, and/or PVC+leather welt as specified by
            customers.
          </p>
        </div>
      </div>
    </div>
  );
}
