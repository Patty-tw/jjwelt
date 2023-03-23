import React from "react";

export default function Banner(){
    return(
        <div className="relative">
            <img src= "./images/shoe-background.jpg" alt = "shoe-banner" className="w-full"/>
            <h1 className="w-full absolute text-7xl font-semibold top-10 left-10 leading-normal">
                Quality Leather Welts <br />
                and Components</h1>
        </div> 
    )
}