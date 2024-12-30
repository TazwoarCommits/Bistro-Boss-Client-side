import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"


const Category = () => {
    return (
        <div className="mt-12 md:mt-48 ">
            <div className="md:my-8 text-center">
                <em className="text-amber-300">---From 10:00 am to 11:00 pm---</em>
                <h2 className="mt-4 md:mt-4 text-xl md:text-4xl">Order Online</h2>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwipe mb-12 md:mb-24"
            >
                <SwiperSlide>
                    <img src={slide1}/>
                    <h3 className='text-xl md:text-3xl uppercase text-center -mt-12 font-bold text-gray-700'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2}/>
                    <h3 className='text-xl md:text-3xl uppercase text-center -mt-12 font-bold text-gray-700'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3}/>
                    <h3 className='text-xl md:text-3xl uppercase text-center -mt-12 font-bold text-gray-700'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4}/>
                    <h3 className='text-xl md:text-3xl uppercase text-center -mt-12 font-bold text-gray-700'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5}/>
                    <h3 className='text-2xl md:text-3xl  uppercase text-center -mt-12 font-bold text-gray-700'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;