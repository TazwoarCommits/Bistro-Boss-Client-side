import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
    const { register, handleSubmit, } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure() ;
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

         const menuRes = await axiosSecure.post("/menu" , menuItem) ;
         console.log(menuRes.data) ;
         if(menuRes.data.insertedId){
            toast.success("Done");
         }

        };

    }
 
    return (
        <div>
            <SectionTitle
                subHeading={"What's New"}
                heading={"Add an Item"}
            ></SectionTitle>
            <div>
                <form className="md:w-10/12 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-3">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input type="text" placeholder="Recipe Name" {...register("name", { required: true })} className="input input-bordered w-full " />
                    </label>
                    <div className="flex gap-8">
                        <label className="form-control w-1/2 my-3">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <select defaultValue="default"  {...register("category", { required: true })} className="select select-bordered w-full ">
                                <option disabled value="default">Select a Category</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </label>
                        <label className="form-control w-1/2 my-3">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input type="text" placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full " />
                        </label>
                    </div>
                    <textarea
                        {...register("recipe", { required: true })}
                        placeholder="Recipe Details"
                        className="textarea textarea-bordered w-full h-48 resize-none ">
                    </textarea>
                    <div className="my-3">
                        <input type="file" {...register("image", { required: true })} className="w-full max-w-xs" />
                    </div>
                    <button className="btn">Add Item <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;