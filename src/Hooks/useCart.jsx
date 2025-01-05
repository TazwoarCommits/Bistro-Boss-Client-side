import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
//   tanStack Query
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure() ;
    const { refetch , data : cart=[]} = useQuery({
        queryKey : ["cart" , user?.email] ,
        queryFn : async () => {
           const {data} = await axiosSecure(`/carts?email=${user.email}`) ; 
           return data ;
        }
    });
    return [cart , refetch] ;
};

export default useCart;