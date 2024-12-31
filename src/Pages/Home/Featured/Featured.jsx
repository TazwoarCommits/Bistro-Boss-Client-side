import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import "./featured.css"

const Featured = () => {
    return (
        <div className="featured-item mt-12 md:mt-24 pt-4">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From our Menu"}
            ></SectionTitle>
            <div className="md:flex items-center gap-8 py-16 text-white">
                <div className="w-1/2">
                    <img className="h-[400px] rounded-r-3xl mx-auto"
                    src={featured} alt="" />
                </div>
                <div className="w-1/2 space-y-4 mr-4">
                    <p className="text-xl">Jan 20 , 2025</p>
                    <p className="text-2xl">Where Can I Get Some</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam optio et odit, rem, omnis libero ipsa sit sed impedit ducimus reiciendis doloremque nobis nisi ex nam voluptatibus provident necessitatibus ullam suscipit magnam recusandae, ad expedita nihil porro! Dolorem, incidunt voluptatum! Qui distinctio deleniti voluptate aliquam iusto quaerat laudantium accusamus est.
                    </p>
                    <button className="border-b-2 p-4 rounded-lg bg-gray-900 hover:bg-slate-800/70"> Read More </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;