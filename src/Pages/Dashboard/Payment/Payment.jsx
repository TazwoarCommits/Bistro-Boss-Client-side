import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Payment = () => {
    return (
        <div>
            <SectionTitle
            heading="Payment" 
            subHeading="To Confirm Order"
            ></SectionTitle>
            <div>
                <h2 className="text-4xl">You Have to Pay First</h2>
            </div>
        </div>
    );
};

export default Payment;
