import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import "./Featured.css"


const Featured = () => {
    return (
        <div className="featured-bg bg-fixed">
            <SectionTitle
                subHeading="Check it out"
                heading="From our menu"
            />
            <div className="md:flex pb-36 pt-20 justify-center items-center px-36">
                <img className="w-1/2" src={featured} alt="" />
                <div className="w-1/2 ml-12">
                    <h4>March 20, 2023</h4>
                    <h4>WHERE CAN I GET SOME?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;