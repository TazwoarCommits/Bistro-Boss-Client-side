import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import useCart from './../../../Hooks/useCart';
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error , setError] = useState("") ;
    const [clientSecret , setClientSecret] = useState() ;
    const axiosSecure = useAxiosSecure() ;
    const {user} = useAuth() ;
    const [cart] = useCart() ;
    const totalPrice = cart.reduce((accumulator , item) => accumulator + item.price , 0 )

    console.log(user);
    useEffect(()=> {
      axiosSecure.post("/create-payment-intent" , {price : totalPrice})
       .then(res => {
        setClientSecret(res.data.clientSecret) 
        console.log(res.data);
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


        // confirm payment

        const {paymentIntent , error : confirmError} = await stripe.confirmCardPayment( clientSecret , {
            payment_method : {
                card : card ,
                billing_details : {
                    email : user?.email || "anonymous",
                    name : user?.displayName || "anonymous",
                } 
            }
        } )

        if(confirmError){
            console.log(confirmError);
        }

        else{console.log(paymentIntent)
            if(paymentIntent.status === "succeeded"){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Payment Complete",
                    text: `Transaction ID : ${paymentIntent.id}`,
                    showConfirmButton: false,
                    timer: 3000
                  });
            }
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