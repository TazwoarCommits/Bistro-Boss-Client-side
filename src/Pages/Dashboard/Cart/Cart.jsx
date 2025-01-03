import { MdDeleteSweep } from "react-icons/md";
import useCart from "../../../Hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((accumulator, item) => accumulator + item.price, 0)
    console.log(cart);
    return (
        <div>
            <div className="flex justify-evenly">
                <h2 className="text-4xl">Items : {cart.length}</h2>
                <h2 className="text-4xl">Total : {totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
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
                            cart.map((item , idx)=> <tr key={item._id} >
                                <td>
                                    <p>{idx+1}</p>
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
                                    <button className="btn btn-ghost text-xl text-red-700"><MdDeleteSweep /></button>
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