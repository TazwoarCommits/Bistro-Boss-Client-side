import { Helmet } from "react-helmet-async";
import CommonBanner from "../../Shared/CommonBanner";
import menuBanner from "../../../assets/menu/banner3.jpg"



const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div className="mb-24">
                <CommonBanner
                    img={menuBanner}
                    title={"Our Menu"}
                    subtitle={"WOULD YOU LIKE TO TRY A DISH"}
                ></CommonBanner>
            </div>
        </div>
    );
};

export default Menu;