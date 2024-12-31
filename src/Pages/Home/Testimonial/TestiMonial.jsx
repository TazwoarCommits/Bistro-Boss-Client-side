import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const TestiMonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-20">
            <SectionTitle
                subHeading={"What our clients say"}
                heading={"Testimonials"}
            >
            </SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map((rev, idx) => <SwiperSlide key={idx} >
                            <div className="m-24 flex flex-col items-center text-center mx-24 my-16 space-y-6">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rev.rating}
                                    readOnly
                                />
                                <p className="text-5xl font-bold"><FaQuoteLeft /></p>
                                <p>{rev.details}</p>
                                <h3 className="text-xl md:text-3xl text-amber-300">{rev.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default TestiMonial;