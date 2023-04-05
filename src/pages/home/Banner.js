import React from "react";

export default function Banner(){
    return(
        <div className="relative">
            <img src= "./images/shoe-background-1.jpg" alt = "shoe-banner" className="w-full  object-cover "/>
            <h1 className="absolute lg:text-6xl md:text-4xl font-semibold top-10 left-10">
                Quality Leather Welts <br />
                and Components</h1>
        </div> 
    )
}