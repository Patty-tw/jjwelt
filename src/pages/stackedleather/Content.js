import React from "react";

export default function Content() {
  return (
    <div className="grid md:grid-rows-4 md:gap-5 md:px-5 leading-relaxed">
      <div className="md:grid md:grid-cols-2">
        <img
          src="https://picsum.photos/500?random=1"
          alt="raw material of stacked leather"
          className="w-full md:mx-auto px-5"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5">Raw Material</h1>
          <p className="md:w-4/5">
            We start with highest quality vegetable tanned leather sourced
            directly and only from major tanneries in Italy. All our raw
            materials have been tested. Test reports can be provided upon
            request.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2">
        <img
          src="https://picsum.photos/500?random=2"
          alt="colors of stacked leather"
          className="w-full mx-5 md:mx-auto"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5">Colors</h1>
          <p className="md:w-4/5">
            We stock multiple colors of raw material which includes Black,
            Brown, Natural and White. We source our brown and natural color from
            three different tanneries each as we there are slight variation in
            tone. We understand this subtle difference will affect the results
            and we will choose one that most closely resembles what our
            customers try to achieve.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2">
        <img
          src="https://picsum.photos/500?random=3"
          alt="customisation of stacked leather"
          className="w-full mx-5 md:mx-auto"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5">Customization</h1>
          <p className="md:w-4/5">
            Our experienced technicians carefully craft the leather pieces base
            on the heel samples provided. We have over 25 years of experience
            and whether customer are seeking simple heels like kitten and pumps
            heels or more complicated wedge and stiletto heels, we are sure our
            company can meet customers' demands.
          </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2">
        <img
          src="https://picsum.photos/500?random=4"
          alt="quality outcome of stacked"
          className="w-full mx-5 md:mx-auto"
        />
        <div className="md:ml-10 p-5 mx-auto">
          <h1 className="text-2xl pb-2.5">Quality Outcome</h1>
          <p className="md:w-4/5">
            With our in-house coloring and finishing, our company are able to
            provide even the most complicated designs customers. From two color
            leather heel covers to vertical-arranged heel covers, we are open
            and always seeking new ways to create more designs.
          </p>
        </div>
      </div>
    </div>
  );
}
