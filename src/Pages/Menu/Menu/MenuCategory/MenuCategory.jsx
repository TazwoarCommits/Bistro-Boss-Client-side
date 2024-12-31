import MenuItem from "../../../Shared/MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({ items }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    items.map((item, idx) => < MenuItem key={idx} item={item} ></MenuItem>)
                }
            </div>
        </div>
    );
};

MenuCategory.propTypes = {
    items : PropTypes.array.isRequired ,
}
export default MenuCategory;