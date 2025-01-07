import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"


const AddItem = () => {
    const { register, handleSubmit , reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        .then(reset())
    };

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
                        <input type="text" placeholder="Recipe Name" {...register("name" ,{ required : true })} className="input input-bordered w-full " />
                    </label>
                    <div className="flex gap-8">
                        <label className="form-control w-1/2 my-3">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <select  {...register("category",{ required : true })} className="select select-bordered w-full ">
                                <option disabled selected>Select a Category</option>
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
                            <input type="text" placeholder="Price" {...register("price",{required : true})} className="input input-bordered w-full " />
                        </label>
                    </div>
                    <textarea
                        {...register("recipe" , {required : true})}
                        placeholder="Recipe Details"
                        className="textarea textarea-bordered w-full h-48 resize-none ">
                    </textarea>
                    <div className="my-3">
                        <input type="file" {...register("image",{required : true})} className="w-full max-w-xs" />
                    </div>
                    <button className="btn">Add Item <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;