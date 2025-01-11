import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import useCart from './../../../Hooks/useCart';
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error , setError] = useState("") ;
    const [clientSecret , setClientSecret] = useState("") ;
    const [transactionID , setTransactionID] = useState("") ;
    const axiosSecure = useAxiosSecure() ;
    const {user} = useAuth() ;
    const [cart] = useCart() ;
    const totalPrice = cart.reduce((accumulator , item) => accumulator + item.price , 0 ) ; 
    const navigate = useNavigate() ;

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
            setTransactionID(paymentIntent.id) ;
            if(paymentIntent.status === "succeeded"){
                // Swal.fire({
                //     position: "center",
                //     icon: "success",
                //     title: "Payment Complete",
                //     text: `Transaction ID : ${paymentIntent.id}`,
                //     showConfirmButton: false,
                //     timer: 3000
                //   });
            
                //   save the payment in database 

                const payment = {
                    email : user?.email,
                    price : totalPrice ,
                    transactionID : transactionID || paymentIntent?.id ,
                    date : new Date()  ,//utc date convert , use Moment JS 
                    cartIds : cart.map(item => item._id),
                    menuItemIDs  : cart.map(item => item.menuId) ,
                    status : "Pending"
                }

               const res = await axiosSecure.post("/payments" , payment)
                console.log(res.data);
                if(res.data?.result?.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Payment Has Been Done",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate("/dashboard/payment-history")
                }
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
            <p className="ml-6 text-red-800">Transaction ID : {transactionID}</p>
        </form>
    );
};

export default CheckoutForm;