import { FaRegEdit } from 'react-icons/fa';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import { MdDeleteSweep } from 'react-icons/md';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const ManageItem = () => {
    const [menues]= useMenu();
    const axiosSecure = useAxiosSecure() ;
    
    const handleDelete = menu => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${menu._id}`)
                if(res.data.deletedCount > 0){
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                }
            }
          });
    }
    return (
        <div>
            <SectionTitle
                heading="Manage All Item"
                subHeading="hurry Up"
            >
            </SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                         {
                           menues.map((menu , idx) => <tr key={idx}>
                                <th>
                                    {idx+1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={menu.image}/>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {menu.name}
                              </td>
                                <td>{menu.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details <FaRegEdit className='text-xl text-amber-200'/></button>
                                </th>
                                <th>
                                    <button onClick={()=>{handleDelete(menu)}} className="btn btn-ghost btn-xs">delete <MdDeleteSweep  className='text-2xl text-red-800'/></button>
                                </th>
                            </tr>
                          )
                         }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;