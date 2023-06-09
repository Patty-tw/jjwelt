import React from "react";
import { Tab } from "@headlessui/react";
import { mapData } from "../data/mapData";
import { useTranslation } from "react-i18next";
import { GoogleMap, MarkerF, LoadScript } from "@react-google-maps/api";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Map(props) {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const { t } = useTranslation();
  return (
    <div>
      <div className="w-4/5 mx-auto">
        <Tab.Group>
          <Tab.List className="flex justify-center">
            {mapData.map(({ id, country }) => (
              <Tab
                key={id}
                className={({ selected }) =>
                  classNames(
                    " w-1/3 md:w-1/4 lg:w-1/5 rounded-lg px-4 py-2.5 text-lg font-medium leading-relaxed mx-10",
                    "ring-white ring-opacity-60 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow text-orange-600"
                      : " hover:bg-white/[0.12] hover:text-gray-300"
                  )
                }
              >
                {t(country)}
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
                  <h1 className="text-xl md:text-3xl lg:text-4xl text-center">
                    {posts.name}
                  </h1>
                  <br />
                  <p className="text-justify md:max-w-md lg:max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
                    {t(posts.present)}
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
                <div className="m-3 text-base md:text-lg lg:text-xl mx-auto md:max-w-md lg:max-w-2xl leading-relaxed text-center">
                  <br />
                  <p>{t(posts.opening)}</p>
                  <p>
                    {t(posts.address)}: {t(posts.road)} <br />
                  </p>
                  {t(posts.country)} <br />
                  {posts.phone}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
