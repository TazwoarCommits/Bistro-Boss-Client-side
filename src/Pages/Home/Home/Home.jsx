import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import TestiMonial from "../Testimonial/TestiMonial";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <FromOurMenu></FromOurMenu>
            <Featured></Featured>
            <TestiMonial></TestiMonial>
        </div>
    );
};

export default Home;