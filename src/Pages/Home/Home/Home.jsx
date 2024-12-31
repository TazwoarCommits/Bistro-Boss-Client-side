import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import FromOurMenu from "../FromOurMenu/FromOurMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <FromOurMenu></FromOurMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;