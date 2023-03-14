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

        <div className="container w-9/12 overflow-hidden mt-24 mr-auto ml-auto relative h-auto">
            <div className="flex border-b-2">
                <button className={"font-bold mr-20 pl-3.5 pb-4" + (`tabs ${getActiveClass(1, "active-tabs")}`)} onClick={() => toggleTab(1)}> Taiwan </button>
                <button className={"font-bold mr-20 pl-3.5 pb-4" + (`tabs ${getActiveClass(2, "active-tabs")}`)} onClick={() => toggleTab(2)}> China </button>
                <button className={"font-bold mr-20 pl-3.5 pb-4" + (`tabs ${getActiveClass(3, "active-tabs")}`)} onClick={() => toggleTab(3)}> Vietnam </button>
            </div>
            <div className={(`content ${getActiveClass(1, "active-content")}`)}>
                <div className="basis-1/2">
                    <h1 className="font-bold text-2xl">Zheng Jyi Company limited</h1>
                    <br />
                    <p>Opening hours: 9am - 5pm</p>
                    <p>No. 3, Alley 2, Lane 569, Caoxi Rd, <br />
                        Caotun Township, <br />
                        Nantou County, Taiwan</p>
                    <p>+886 970417511</p>
                </div>
                <div className="basis-1/2 border border-indigo-600">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.7906926388664!2d120.67474461478851!3d23.96784048448263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469305cc8f22115%3A0x9a67497d17daf409!2sNo.%203%2C%20Alley%202%2C%20Lane%20569%2C%20Caoxi%20Rd%2C%20Caotun%20Township%2C%20Nantou%20County%2C%20542!5e0!3m2!1sen!2stw!4v1675877618723!5m2!1sen!2stw"
                        width="475" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" title = "tw"></iframe>
                </div>
            </div>

            <div className={`content ${getActiveClass(2, "active-content")}`}>
                <div className="basis-1/2">
                    <h1 className="font-bold text-2xl">Yong Kai Enterprises </h1>
                    <br />
                    <p>Opening hours: 9am - 5pm </p>
                    <p>Pingnan Industrial Area <br />
                        Pingzhou, Nanhai District, Foshan City <br />
                        Guandong, China
                    </p>
                    <p>+86 139-277-55394</p>

                </div>
                <div className="basis-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469908.9229240582!2d112.7737546!3d23.0544681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340250afa6117755%3A0x343b46f2409bd82f!2sPingnan%20Industrial%20Zone!5e0!3m2!1sen!2stw!4v1675871050476!5m2!1sen!2stw"
                        width="475" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" title="cn"></iframe>
                </div>
            </div>

            <div className={`content ${getActiveClass(3, "active-content")}`}>
                <div className="font-bold text-2xl">
                    <h1 className="font-bold">Cong Ty Chanh Kiet</h1>
                    <br />
                    <p>Opening hours: 9am - 5pm</p>
                    <p>DT 743, Song Than Industrial Area <br />
                        Binh Duong, Vietnam</p>
                    <p>+84 916-810445</p>


                </div>
                <div className="basis-1/2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125348.24276560765!2d106.6829821713152!3d10.95335586379039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8d9be945fa3%3A0xbc8af6300e5cad6a!2sSong%20Than%20Industrial%20Park%20Development%20J.S.C!5e0!3m2!1sen!2stw!4v1675877447411!5m2!1sen!2stw"
                        width="475" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" title="vn"></iframe>
                </div>
            </div>
        </div>
    )
}