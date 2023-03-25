import React from "react";

export default function Banner(){
    return(
        <div className="relative">
            <img src= "./images/kilian-seiler-unsplash.jpg" alt = "shoe-banner" className="w-full"/>
            <h1 className="w-full absolute lg:text-6xl md:text-4xl font-semibold top-10 left-10 text-white">
                Toughness Meets Practicality: <br />
                Durable Plastic Welts for <br />
                Long-Lasting Wear</h1>
        </div> 
    )
}