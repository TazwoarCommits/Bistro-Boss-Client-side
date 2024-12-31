import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const FromOurMenu = () => {

    const [menues , setMenues] = useState([]) ;

    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const popularMenu = data.filter(item => item.category === "popular") ;
            setMenues(popularMenu) ;
        })
    } , []) ;

    return (
        <section>
            <SectionTitle subHeading={"Check it out"} heading={"from our menu"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    menues.map((menu , idx) => < MenuItem key={idx} item={menu} ></MenuItem> )
                }
            </div>
        </section>
    );
};

export default FromOurMenu;