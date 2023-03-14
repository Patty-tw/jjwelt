import React from "react";
import { useState } from "react";

export default function Map(props) {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    }


    return (
        <div className="container w-9/12 overflow-hidden mt-24 mr-auto ml-auto relative h-96">
            <div className="flex border-b-2">
                <button className="font-bold mr-20 pl-3.5 pb-4" id='btn1' onClick={() => toggleTab(1)}> Taiwan </button>
                <button
                    className={"font-bold mr-20 pl-3.5 pb-4" + (toggleState)}
                    onClick={() => toggleTab(2)}>
                    China </button>
                <button className="font-bold mr-20 pl-3.5 pb-4" id='btn3' onClick={() => toggleTab(3)}> Vietnam </button>
            </div>

            <div>
                <div>
                    <h1>{props.compName}</h1>
                    <p>{props.openHr}</p>
                    <p>{props.road}</p>
                    <p>{props.city}</p>
                    <p>{props.stateCountry}</p>
                    <p>{props.phone}</p>
                </div>
            </div>

        </div>
    )
}