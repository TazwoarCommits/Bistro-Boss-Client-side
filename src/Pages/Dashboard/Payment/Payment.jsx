import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

// TODO : add publishable key
const stripePromise = loadStripe() ;

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
            <Elements stripe={stripePromise}>

            </Elements>
        </div>
    );
};

export default Payment;
