import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import BistroIntro from "./BistroIntro/BistroIntro";
import ChecfRecomands from "./ChefRecomands/ChecfRecomands";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner />
            <Category />
            <BistroIntro />
            <PopularMenu />
            <div className="text-center text-black bg-white py-[96px]">
                <h4 className="text-[50px] font-semibold">Call Us: +88 0192345678910</h4>
            </div>
            <ChecfRecomands />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;