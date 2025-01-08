import { Helmet } from "react-helmet-async";
import CommonBanner from "../../Shared/CommonBanner";
import menuBanner from "../../../assets/menu/banner3.jpg"
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import dessertBanner from "../../../assets/menu/dessert-bg.jpeg"
import pizzaBanner from "../../../assets/menu/pizza-bg.jpg"
import SoupsBanner from "../../../assets/menu/soup-bg.jpg"
import saladsBanner from "../../../assets/menu/salad-bg.jpg"
import drinksBanner from "../../../assets/menu/drinks.avif"
import MenuCategory from "./MenuCategory/MenuCategory";



const Menu = () => {
    const [menues] = useMenu();
    const dessert = menues.filter(item => item.category === "dessert");
    const salad = menues.filter(item => item.category === "salad");
    const drinks = menues.filter(item => item.category === "drinks");
    const pizza = menues.filter(item => item.category === "pizza");
    const soup = menues.filter(item => item.category === "soup");
    const offered = menues.filter(item => item.category === "offered");

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
            <SectionTitle subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            <div className="mt-12 md:mt-24">
                <MenuCategory items={offered} category="offered"></MenuCategory>
            </div>
            <div className="mt-12 md:mt-24">
                <CommonBanner
                    img={dessertBanner}
                    title={"Desserts"}
                    subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></CommonBanner>
                <div className="mt-12 md:mt-24">
                    <MenuCategory items={dessert} category="dessert"></MenuCategory>
                </div>
            </div>
            <div className="mt-12 md:mt-24">
                <CommonBanner
                    img={pizzaBanner}
                    title={"Pizzas"}
                    subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></CommonBanner>
                <div className="mt-12 md:mt-24">
                    <MenuCategory items={pizza} category="pizza"></MenuCategory>
                </div>
            </div>
            <div className="mt-12 md:mt-24">
                <CommonBanner
                    img={SoupsBanner}
                    title={"Soups"}
                    subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></CommonBanner>
                <div className="mt-12 md:mt-24">
                    <MenuCategory items={soup} category="soup"></MenuCategory>
                </div>
            </div>
            <div className="mt-12 md:mt-24">
                <CommonBanner
                    img={saladsBanner}
                    title={"Salads"}
                    subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></CommonBanner>
                <div className="mt-12 md:mt-24">
                    <MenuCategory items={salad} category="salad"></MenuCategory>
                </div>
            </div>
            <div className="mt-12 md:mt-24">
                <CommonBanner
                    img={drinksBanner}
                    title={"Drinks"}
                    subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></CommonBanner>
                <div className="mt-12 md:mt-24">
                    <MenuCategory items={drinks} category="drinks"></MenuCategory>
                </div>
            </div>
        </div>
    );
};

export default Menu;