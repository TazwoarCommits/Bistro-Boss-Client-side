import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const {user} = useAuth() ; 
    const axiosSecure = useAxiosSecure() ; 

    const {data : payments = []} = useQuery({
        queryKey : ["payments" , user.email],
        queryFn : async () => {
           const res = axiosSecure(`/payments/${user.email}`)
           return res.data ;
        }
    }) 

    return (
        <div>
             <h2>Total made Payments : {payments.length} </h2>
        </div>
    );
};

export default PaymentHistory;