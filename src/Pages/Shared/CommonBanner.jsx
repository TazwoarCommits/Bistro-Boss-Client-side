import PropTypes from "prop-types";
import { Parallax } from 'react-parallax';

const CommonBanner = ({ img, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero md:min-h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="bg-black/50 hero-content w-full md:w-[900PX] py-24 text-center">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold uppercase text-white ">{title}</h1>
                        <p className="mb-5 uppercase text-white">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>

        </Parallax>

    );
};

CommonBanner.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}
export default CommonBanner;