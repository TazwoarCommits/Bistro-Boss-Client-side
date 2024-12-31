import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import TestiMonial from "../Testimonial/TestiMonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <FromOurMenu></FromOurMenu>
            <Featured></Featured>
            <TestiMonial></TestiMonial>
        </div>
    );
};

export default Home;