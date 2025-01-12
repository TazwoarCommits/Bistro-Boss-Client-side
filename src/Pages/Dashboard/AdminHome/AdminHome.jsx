import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaSitemap } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure("/admin-stats");
            console.log(data);
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-3xl">Hi Welcome ,
                <span>{user?.displayName ? user?.displayName : "Back"}</span>
            </h2>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                       <FaDollarSign className="text-3xl"></FaDollarSign>
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value">{data.revenue}$</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                      <FaUsersGear className="text-3xl"></FaUsersGear>
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value">{data.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                    <FaSitemap className="text-3xl"></FaSitemap>
                    </div>
                    <div className="stat-title">Menu Items</div>
                    <div className="stat-value">{data.menuItems}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-8 w-8 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">{data.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;