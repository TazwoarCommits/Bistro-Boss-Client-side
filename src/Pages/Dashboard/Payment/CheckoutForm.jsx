import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import useCart from './../../../Hooks/useCart';



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error , setError] = useState("") ;
    const [clientSecret , setClientSecret] = useState() ;
    const axiosSecure = useAxiosSecure() ;
    const [cart] = useCart() ;
    const totalPrice = cart.reduce((accumulator , item) => accumulator + item.price , 0 )

    useEffect(()=> {
      axiosSecure.post("/create-payment-intent" , {price : totalPrice})
       .then(res => {
        setClientSecret(res.data.clientSecret) 
       })
    } , [axiosSecure , totalPrice]) ;

    const handleSubmit = async e => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const {error , paymentMethod } = await stripe.createPaymentMethod({
            type : "card" ,
            card
        }) ;

        if(error){
            console.log("Payment Error ",error);
            setError(error.message) ;
        }

        else{
            console.log("Payment Method" , paymentMethod);
            setError("")
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary btn-sm m-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="ml-6 text-red-800">{error}</p>
        </form>
    );
};

export default CheckoutForm;