import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from "axios";



const FoodCard = ({item}) => {
    const {name , image , recipe , price , _id} = item ;
    const navigate = useNavigate() ;
    const {user} = useAuth() ; 
    const handleAddToCart = (food)=> {
        if(user && user.email){
            // console.log(food , user.email);
            const cartItem = {
                menuId : _id ,
                userEmail : user.email ,
                image : image ,
                name : name ,
                price : price
            }

            axios.post("http://localhost:5000/carts" , cartItem)
            .then( res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Added to Cart",
                        showConfirmButton: false,
                        timer: 1000 ,
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "User Not Logged In",
                text: "You Have To Login To Place Your Orders",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Redirecting to Login Page",
                    icon: "success"
                  });
                  navigate("/login")
                }
              });
        }
    }

    return (
        <div className="relative card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}/>
            </figure>
            <p className="absolute top-1 right-2 py-2 mr-2 mt-2 px-4 bg-slate-900 text-amber-300">{price}$</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title text-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-end ">
                    <button 
                    onClick={ () => handleAddToCart(item)}
                    className="border-b-2 hover:border-2 border-amber-300  p-4 rounded-lg bg-transparent hover:bg-white/10 backdrop-blur-lg text-amber-300"
                    >Order Now</button>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    item : PropTypes.object.isRequired ,
}

export default FoodCard;