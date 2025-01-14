import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoLogOut } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
    const { user, logout, } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    // const axiosSecure = useAxiosSecure() ; 
    // axiosSecure("/carts")
    // .then(res=>{
    //     console.log(res.data)
    // })

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/error">Contact Us</NavLink></li>
        {
            user && isAdmin &&
            <li><NavLink to="/dashboard/adminHome">DashBoard</NavLink></li>
        }
        {
            user && !isAdmin &&
            <li><NavLink to="/dashboard/userHome">DashBoard</NavLink></li>
        }
        <li><NavLink to="/menu">Our Menu</NavLink></li>
        <li><NavLink to="/order/salad">Order</NavLink></li>
        <li><NavLink to="/dashboard/payment-history">Payment-History</NavLink></li>
        <li><NavLink to="/dashboard/cart">
            <button className="flex items-center gap-1">
                <FaShoppingCart /><span className="">{cart.length}</span>
            </button>
        </NavLink></li>

    </>


    return (
        <div className="max-w-screen-2xl navbar fixed z-10 bg-base-100/80">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link><p className="btn btn-ghost text-xl text-amber-300">Bistro Boss</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <p onClick={logout}
                            className="btn text-amber-300"><span>{user.displayName}</span><span className="text-lg"><IoLogOut /></span></p>

                        :

                        <Link to="/login">
                            <p className="btn">Login</p>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;