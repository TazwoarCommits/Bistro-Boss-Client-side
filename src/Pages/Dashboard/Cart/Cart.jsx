import { MdDeleteSweep } from "react-icons/md";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart , refetch] = useCart();
    const totalPrice = cart.reduce((accumulator, item) => accumulator + item.price, 0).toFixed(2);
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch() ; 
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    


    return (
        <div className="mt-[10vh]">
            <div className="flex justify-evenly mb-[5vh]">
                <h2 className="text-4xl">Items : {cart.length}</h2>
                <h2 className="text-4xl">Total : {totalPrice}</h2>
               {
                cart.length ? <Link to="/dashboard/payment"> <button className="btn btn-primary">Pay</button></Link>
                :
                <button disabled className="btn btn-primary">Pay</button>
               }
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl. No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, idx) => <tr key={item._id} >
                                <td>
                                    <p>{idx + 1}</p>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{item.name}</p>
                                </td>
                                <td>
                                    <p>{item.price}</p>
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost text-xl text-red-700"><MdDeleteSweep /></button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;