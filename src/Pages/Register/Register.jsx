import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import GoogleLogin from "../../components/Social Login/GoogleLogin";



const Register = () => {
    const axiosPublic = useAxiosPublic() ;
    const { createUser , updataUsersProfile } = useContext(AuthContext) ;
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(res => {
                if (res.user) {
                    updataUsersProfile(data.name , data.photo)
                    .then( () => {
                       const userInfo = {
                        name : data.name , email : data.email , photo : data.photo
                       } ;

                       axiosPublic.post("/users" , userInfo)
                       .then(res => {
                        if(res.data){
                           console.log(data);
                        }
                        
                       }) ;

                       Swal.fire({
                        icon: "success",
                        title: "Successfully",
                        text: "Logged In",
                    });

                       navigate("/");
                    })
                    .catch(err => {
                        toast.error(`${err.code , err.message}`)
                    })
                    reset();
                   
                }
            })
            .catch(err=>{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${err.message}`,
                  });

                  reset() ;
            })

    }

    return (

        <>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card  bg-base-100 w-full md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })} className="input input-bordered" required />
                                {errors.email?.type === "required" && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" required />
                                {errors.email?.type === "required" && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
                                })} className="input input-bordered" required />

                                {/* validating password */}
                                {errors.password?.type === "required" && <span>This field is required</span>}
                                {errors.password?.type === "pattern" && <span className="text-red-700">PassWord Must hav at least 6 characters and includes at least one lowercase and uppercase character</span>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo URL" {...register("photo", { required: true })} className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="divider"></div>
                        <div className="mx-auto mb-6">
                         <GoogleLogin></GoogleLogin>
                        </div>
                        <p className="ml-4 mb-6">Have an Account ? <Link to="/login">Login Now</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;