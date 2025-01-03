import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
//   tanStack Query
    const axiosSecure = useAxiosSecure() ;
    const {data : cart} = useQuery({
        queryKey : ["cart"] ,
        queryFn : async () => {
           const {data} = await axiosSecure("/carts") ;
           return data ;
        }
    });
    return [cart] ;
};

export default useCart;