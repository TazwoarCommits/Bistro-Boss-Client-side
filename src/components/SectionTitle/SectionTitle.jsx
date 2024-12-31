import PropTypes from "prop-types";

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8 md:my-12">
            <em className="text-amber-300">---{subHeading}---</em>
            <h2 className="mt-4 md:mt-4 text-xl md:text-4xl border-y-4 p-4 uppercase">{heading}</h2>
        </div>
    );
};

SectionTitle.propTypes = {
    subHeading: PropTypes.string,
    heading: PropTypes.string,
}

export default SectionTitle;