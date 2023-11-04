import { useContext } from "react";
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToCart = item =>{
        console.log(item);
        if(user){
            fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                else{
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, Login now!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          navigate('/login');
                        }
                      })
                }
            })

        }
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