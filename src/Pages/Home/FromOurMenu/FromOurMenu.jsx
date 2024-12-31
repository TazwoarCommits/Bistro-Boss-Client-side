import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const FromOurMenu = () => {
    const [menu]= useMenu() ;
    const popular = menu.filter(item => item.category === "popular" ) ;

    return (
        <section>
            <SectionTitle subHeading={"Check it out"} heading={"from our menu"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popular.map((menu , idx) => < MenuItem key={idx} item={menu} ></MenuItem> )
                }
            </div>
        </section>
    );
};

export default FromOurMenu;