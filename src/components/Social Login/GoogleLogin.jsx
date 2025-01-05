import { FaGoogle } from "react-icons/fa";
import useAuth from './../../Hooks/useAuth';
import { GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleLogin = () => {
    const {googleLogin} = useAuth() ;
    const provider = new GoogleAuthProvider() ; 
    const axiosPublic = useAxiosPublic() ; 
    const navigate = useNavigate();
    
    const handleGoogleLogin = () => {
        googleLogin(provider)
        .then(res => {
            if(res.user){
               const userInfo = {
                 email : res.user?.email ,
                 name : res.user?.displayName ,
               }
               axiosPublic.post("/users" , userInfo)
               .then(res => {
                console.log(res.data);
                navigate("/")
               })
            }
        })
        
    }

    return (
        <div>
            <div>
                <button 
                onClick={handleGoogleLogin}
                 className="btn btn-wide">
                    <FaGoogle></FaGoogle>
                   Login With Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;