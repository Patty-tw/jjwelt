import React from "react";

export default function Banner(){
    return(
        <div className="relative">
            <img src= "./images/shoe-background.jpg" alt = "shoe-banner" className="w-full"/>
            <h1 className="absolute lg:text-7xl md:text-5xl font-semibold top-10 left-10">
                Quality Leather Welts <br />
                and Components</h1>
        </div> 
    )
}