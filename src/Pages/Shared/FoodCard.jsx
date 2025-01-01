import PropTypes from "prop-types";

const FoodCard = ({item}) => {
    const {name , image , recipe , price} = item ;
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
                    <button className="border-b-2 hover:border-2 border-amber-300  p-4 rounded-lg bg-transparent hover:bg-white/10 backdrop-blur-lg text-amber-300">Order Now</button>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes = {
    item : PropTypes.object.isRequired ,
}

export default FoodCard;