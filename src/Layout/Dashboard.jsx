
import { FaCalendar, FaHome, FaShoppingCart } from 'react-icons/fa';
import { MdEmail, MdOutlineReviews, MdPayments, MdRestaurantMenu } from 'react-icons/md';
import { RiShoppingBag4Fill } from 'react-icons/ri';
import { TbCalendarPin } from 'react-icons/tb';
import { NavLink, Outlet } from 'react-router-dom';
const Dashboard = () => {

    // TODO : get isAdmin from database
    const isAdmin = true;

    return (
        <div className='flex'>
            <div className="w-64 h-[100vh] bg-amber-500 text-black">
                <ul className='menu p-4 '>
                    {/* users navlink */}
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to={"/dashboard/userHome"}>
                                        <span><FaHome /></span>Users Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/reservation"}>
                                        <span><FaCalendar /></span> Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/payment-history"}>
                                        <span><MdPayments /></span> Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/cart"}>
                                        <span><FaShoppingCart /></span> My Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/addreview"}>
                                        <span><MdOutlineReviews /></span> Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/mybooking"}>
                                        <span> <TbCalendarPin /></span> My Bookings
                                    </NavLink>
                                </li>
                            </> :
                            <>
                                <li>
                                    <NavLink to={"/dashboard/userHome"}>
                                        <span><FaHome /></span>Users Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/reservation"}>
                                        <span><FaCalendar /></span> Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/payment-history"}>
                                        <span><MdPayments /></span> Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/cart"}>
                                        <span><FaShoppingCart /></span> My Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/addreview"}>
                                        <span><MdOutlineReviews /></span> Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/mybooking"}>
                                        <span> <TbCalendarPin /></span> My Bookings
                                    </NavLink>
                                </li>
                            </>
                    }
                    <div className="divider divider-neutral"></div>
                    {/* shared Navlinks */}
                    <li>
                        <NavLink to={"/"}>
                            <span><FaHome /></span> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/menu"}>
                            <span><MdRestaurantMenu /></span>Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/order/salad"}>
                            <span><RiShoppingBag4Fill /></span> Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>
                            <span><MdEmail /></span> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;