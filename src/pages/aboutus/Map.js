import React from "react";
import "./Map.css"

export default function Map() {
    const [toggleState, setToggleState] = React.useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";

    return (
        <div className="container overflow-hidden w-4/5 relative mr-auto ml-auto md:px-20 lg:px-40">
            <div className="flex border-b-2 mt-24">
                <button className={"font-bold mr-20 pl-3.5 pb-4" + (`tabs ${getActiveClass(1, "active-tabs")}`)} onClick={() => toggleTab(1)}> Taiwan </button>
                <button className={"font-bold mr-20 pl-3.5 pb-4" + (`tabs ${getActiveClass(2, "active-tabs")}`)} onClick={() => toggleTab(2)}> China </button>
                <button className={"font-bold mr-20 pl-3.5 pb-4" + (`tabs ${getActiveClass(3, "active-tabs")}`)} onClick={() => toggleTab(3)}> Vietnam </button>
            </div>
            <div className={(`content ${getActiveClass(1, "active-content")}`)}>
                <div className="basis-full">
                    <h1 className="font-semibold text-4xl ">Zheng Jyi Company limited</h1>

                    <p>Zheng Jyi was first estalished in 1981 in Taiwan. Throughout the years, we have become one of the largest suppliers in
                        welt, supplying to major brands such as Dr. Martens, Timberland, Coach, Zara, Lacotse and many more. We also expanded our
                        production into outsole stockfitting and leather heel cover production. </p>

                    <div className="flex">
                        <div className="basis-1/2">
                            <br />
                            <p>Opening hours: 9am - 5pm</p>
                            <p>No. 3, Alley 2, Lane 569, Caoxi Rd, <br />
                                Caotun Township, <br />
                                Nantou County, Taiwan</p>
                            <p>+886 970417511</p>
                        </div>
                        <div className="basis-1/2">
                            <br />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.7906926388664!2d120.67474461478851!3d23.96784048448263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469305cc8f22115%3A0x9a67497d17daf409!2sNo.%203%2C%20Alley%202%2C%20Lane%20569%2C%20Caoxi%20Rd%2C%20Caotun%20Township%2C%20Nantou%20County%2C%20542!5e0!3m2!1sen!2stw!4v1675877618723!5m2!1sen!2stw"
                                width="475" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" title="tw"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`content ${getActiveClass(2, "active-content")}`}>
                <div className="basis-full">
                    <h1 className="font-semibold text-4xl">Yong Kai Enterprises </h1>
                    <p>As the company expanded, Zheng Jyi moved the factory to China in 1988. Zheng Jyi became more specialized in welt, both extrusion and leather welt.
                        We purchased all our machinery from Italy and had our employees flown over many times, acquiring welting skills, that later
                        become our core competency in the business.</p>
                    <div className="flex">
                        <div className="basis-1/2">
                            <br />
                            <p>Opening hours: 9am - 5pm </p>
                            <p>Pingnan Industrial Area <br />
                                Pingzhou, Nanhai District, Foshan City <br />
                                Guandong, China
                            </p>
                            <p>+86 139-277-55394</p>
                        </div>
                        <div className="basis-1/2">
                            <br />
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469908.9229240582!2d112.7737546!3d23.0544681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340250afa6117755%3A0x343b46f2409bd82f!2sPingnan%20Industrial%20Zone!5e0!3m2!1sen!2stw!4v1675871050476!5m2!1sen!2stw"
                                width="475" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" title="cn"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`content ${getActiveClass(3, "active-content")}`}>
                <div className="basis-full">
                    <h1 className="font-semibold text-4xl">Cong Ty Chanh Kiet</h1>
                    <p>With the first wave of foreign investment into Vietnam, we initiated and branched out another factory in Vietnam in 1999.
                        As we expanded, we started manufacturing leather heel covers and outsole stockfitting. Our Binh Duong, Vietnam factory is 
                        close to major airport and shipping port.</p>
                    <div className="flex">
                        <div className="basis-1/2">
                            <br />
                            <p>Opening hours: 9am - 5pm</p>
                            <p>DT 743, Song Than Industrial Area <br />
                                Binh Duong, Vietnam</p>
                            <p>+84 916-810445</p>
                        </div>

                        <div className="basis-1/2 text-center">
                            <br/>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125348.24276560765!2d106.6829821713152!3d10.95335586379039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8d9be945fa3%3A0xbc8af6300e5cad6a!2sSong%20Than%20Industrial%20Park%20Development%20J.S.C!5e0!3m2!1sen!2stw!4v1675877447411!5m2!1sen!2stw"
                                width="475" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" title="vn"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}