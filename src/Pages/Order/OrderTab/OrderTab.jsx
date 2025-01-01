import PropTypes from "prop-types";
import FoodCard from "../../Shared/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 ">
            {
                items.map((item, idx) => <FoodCard key={idx} item={item}></FoodCard>)
            }
        </div>
    );
};
OrderTab.propTypes = {
    items : PropTypes.array,
}

export default OrderTab;