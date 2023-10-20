import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import img1 from "../../../../assets/menu/pizza-bg.jpg"
import img2 from "../../../../assets/menu/salad-bg.jpg"
import img3 from "../../../../assets/menu/soup-bg.jpg"

const ChecfRecomands = () => {
    return (
        <div>
            <SectionTitle
                subHeading="Should Try"
                heading="Recomends"
            />
            <div className='grid md:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pizza</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Soup</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChecfRecomands;