import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"


const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
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
                        <input type="text" placeholder="Recipe Name" {...register("name")} className="input input-bordered w-full " />
                    </label>
                    <div className="flex gap-8">
                        <label className="form-control w-1/2 my-3">
                            <div className="label">
                                <span className="label-text">Recipe Name*</span>
                            </div>
                            <select  {...register("category")} className="select select-bordered w-full ">
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
                            <input type="text" placeholder="Price" {...register("Price")} className="input input-bordered w-full " />
                        </label>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;