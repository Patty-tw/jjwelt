import React from "react";
import { Tab } from "@headlessui/react";
import { mapData } from "../data/mapData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Map(props) {
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {mapData.map(({ id, country }) => (
            <Tab
              key={id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div>
                <h1 className="">{posts.name}</h1>
                <br />
                <p className="">{posts.present}</p>
              </div>
              <div className="basis-1/2">
                <br />
                <p>Opening hours: {posts.open}</p>
                <p>
                  {posts.road} <br />
                </p>
                {posts.suburb && <p> {posts.suburb}</p>}
                {posts.district && <p> {posts.district}</p>}
                {posts.city && <p> {posts.city},</p>}
                {posts.country && <p> {posts.country}</p>}

                <p>{posts.phone}</p>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
