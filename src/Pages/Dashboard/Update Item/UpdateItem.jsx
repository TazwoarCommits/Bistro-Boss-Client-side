import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const menu = useLoaderData() ;
    const {name ,  recipe , category , _id , price} = menu ; 
    console.log(menu )

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_API, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                category: data.category,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // reset();
                Swal.fire({
                    title: `${data.name} Updated On the Menu`,
                    icon: "success",
                });
            }

        };

    }

    return (
        <div>
            <SectionTitle
                heading="update item"
                subHeading="update an item"
            >
            </SectionTitle>
            <div>
                <form className="md:w-10/12 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-3">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input type="text" defaultValue={name} placeholder="Recipe Name" {...register("name")} className="input input-bordered w-full " />
                    </label>
                    <div className="flex gap-8">
                        <label className="form-control w-1/2 my-3">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category}  {...register("category")} className="select select-bordered w-full ">
                                {/* <option disabled value="default">Select a Category</option> */}
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>dessert</option>
                                <option>drinks</option>
                            </select>
                        </label>
                        <label className="form-control w-1/2 my-3">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input type="text" defaultValue={price} placeholder="Price" {...register("price")} className="input input-bordered w-full " />
                        </label>
                    </div>
                    <textarea
                    defaultValue={recipe}
                        {...register("recipe", { required: true })}
                        placeholder="Recipe Details"
                        className="textarea textarea-bordered w-full h-48 resize-none ">
                    </textarea>
                    <div className="my-3">
                        <input type="file" {...register("image")} className="w-full max-w-xs" />
                    </div>
                    <button className="btn">Update<FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;