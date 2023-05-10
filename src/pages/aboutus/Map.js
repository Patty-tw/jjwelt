import React from "react";
import { Tab } from "@headlessui/react";
import { mapData } from "../data/mapData";
import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Map(props) {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  return (
    <div className="px-20">
      <div className="w-4/5 px-10 py-14 mx-auto">
        <Tab.Group>
          <Tab.List className="flex">
            {mapData.map(({ id, country }) => (
              <Tab
                key={id}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-lg font-medium leading-5",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow text-orange-600"
                      : " hover:bg-white/[0.12] hover:text-gray-300"
                  )
                }
              >
                {country}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-2">
            {mapData.map((posts) => (
              <Tab.Panel
                key={posts.id}
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2"
                )}
              >
                <div>
                  <h1 className="text-2xl text-center">{posts.name}</h1>
                  <br />
                  <p className="text-xl md:max-w-md lg:max-w-2xl mx-auto">
                    {posts.present}
                  </p>
                </div>
                <div className="mt-10 md:max-w-md lg:max-w-2xl mx-auto">
                  <LoadScript googleMapsApiKey="AIzaSyCLGj4VT9rC13drQbwOgwYEFvrbWJOtYd4">
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={posts.center}
                      zoom={posts.zoom}
                    >
                      <MarkerF position={posts.center} />
                    </GoogleMap>
                  </LoadScript>
                </div>
                <div className="basis-1/2 text-xl text-center">
                  <br />
                  <p>Opening hours: {posts.opening}</p>
                  <p>
                    Address: {posts.road} <br />
                  </p>
                  {posts.suburb && <p> {posts.suburb}</p>}
                  {posts.district && <p> {posts.district}</p>}
                  {posts.city && <p> {posts.city}</p>}
                  {posts.country && <p> {posts.country}</p>}
                  <p>{posts.phone}</p>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
