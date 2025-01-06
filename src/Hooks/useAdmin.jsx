import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from './useAxiosSecure';


const useAdmin = () => {
    const {user} = useAuth() ;
    const axiosSecure = useAxiosSecure() ;
    const {data : isAdmin , isPending } = useQuery({
    queryKey : [user?.email , "isAdmin"] ,
    queryFn : async () => {
        const {data} = await axiosSecure(`/users/admin/${user.email}`) ;
        console.log(data);
        return data.admin
    }
   }) ; 
   return [isAdmin , isPending] ;
};

export default useAdmin;