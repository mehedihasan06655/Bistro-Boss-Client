
const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
    const handleAddToCart = item =>{
        console.log(item);
    }
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 absolute right-0 mr-4 mt-4 px-4">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end flex flex-col items-center">
                    <button onClick={()=> handleAddToCart(item)} className="btn btn-outline border-orange-400 border-0 border-b-4 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;