import React from "react";

export default function Gallery() {
    return (
        <div>
            <h1 className="text-center md:text-2xl lg:text-4xl mt-10 mb-10">Gallery</h1>
            <div className="grid grid-cols-auto-fit gap-10 p-10 justify-items-center">
                <img src ="https://picsum.photos/500?random=1" alt="outsole" />
                <img src ="https://picsum.photos/500?random=1" alt = "outsole" /> 
                <img src ="https://picsum.photos/500?random=1" alt = "outsole" /> 
                <img src ="https://picsum.photos/500?random=1" alt = "outsole" /> 
                <img src ="https://picsum.photos/500?random=1" alt="outsole" />
                <img src ="https://picsum.photos/500?random=1" alt = "outsole" /> 
                <img src ="https://picsum.photos/500?random=1" alt = "outsole" /> 
                <img src ="https://picsum.photos/500?random=1" alt = "outsole" /> 

            </div>
        </div>
    )
}