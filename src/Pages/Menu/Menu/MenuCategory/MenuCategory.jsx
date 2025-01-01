import { Link } from "react-router-dom";
import MenuItem from "../../../Shared/MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({ items , category }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    items.map((item, idx) => < MenuItem key={idx} item={item} ></MenuItem>)
                }
            </div>
            <div className="mt-5 w-3/12 mx-auto">
                <Link to={`/order/${category}`}>
                    <button 
                    className="w-full border-b-2 p-4 rounded-lg bg-transparent hover:bg-white/10 backdrop-blur-lg"
                    >Order Your Favorite Food
                    </button>
                </Link>
            </div>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array.isRequired,
    category : PropTypes.string.isRequired ,
}
export default MenuCategory;