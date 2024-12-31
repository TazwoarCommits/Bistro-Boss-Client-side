import PropTypes from "prop-types";

PropTypes
const MenuItem = ({item}) => {
    const {name , recipe , image , price} = item ;
    
    return (
        <div className="my-2 flex justify-between space-x-4">
            <img className="w-[120px] h-[110px] rounded-r-full rounded-b-full" src={image} />
            <div className="text-left">
                <h3 className="uppercase ">{name} --------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-amber-300 text-xl font-semibold">{price}$</p>
        </div>
    );
};

MenuItem.propTypes = {
    item : PropTypes.object
}

export default MenuItem;