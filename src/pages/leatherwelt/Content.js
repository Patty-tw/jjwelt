import React from "react";

export default function Content() {
    return (
        <>
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=1" alt="dessicant" className="mx-auto" />
                <div className="my-auto">
                    <h1 className="text-3xl">Leather Welt</h1>
                    <p className="">Classic welt made from the finest selection of leather. The premium look and feel is an essential element in the overall quality of high-end dress shoes and boots.</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <img src="https://picsum.photos/500?random=2" alt="dessicant" className="mx-auto" />
                <div className="my-auto mx-auto">
                    <h1 className="text-3xl">Leatherboard Welt (Bonded Leather)</h1>
                    <p className="">Leatherboard welt is a  economic alternative to leather welt. The texture and feel closely mimics that of leather counterpart.</p>
                </div>
            </div>
        </>
    )
}