import React from "react"
import Map from "./Map"
import address from "../data/address"

export default function Contactus(){
    const details = address.map(detail => {
        return (
            <Map 
                key = {detail.id}
                {...detail}
            />
        )
    }) 
    return (
        <>
            {details}
        </>
    )
}