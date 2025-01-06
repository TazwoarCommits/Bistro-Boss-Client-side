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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} />
                    <select  {...register("category")} className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select a Category</option>
                        <option>Salad</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Dessert</option>
                        <option>Drinks</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;