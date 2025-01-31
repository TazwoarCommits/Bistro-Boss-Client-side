import { useContext, useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import GoogleLogin from '../../components/Social Login/GoogleLogin';


const Login = () => {
    const { loginUser } = useContext(AuthContext) ;
    const navigate = useNavigate() ;

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault() ;
        const form = new FormData(e.target) ; 
        const email = form.get("email") ;
        const password = form.get("password") ;
        const captcha = form.get("captcha") ;

        if (validateCaptcha(captcha)) {
            loginUser(email, password)
                .then(res => {
                    if(res.user){
                        Swal.fire({
                            icon: "success",
                            title: "Successfully",
                            text: "Logged In",
                          });
                        e.target.reset() ;
                        navigate("/") ;
                    }
                })
               .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${err.message}`,
                  }) ;
               }) ;

        }
        else {
            toast.error("captcha did not match, try again") ;
         } ;
    } ;

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full md:w-1/2 max-w-sm shadow-2xl">
                        <form onSubmit={handleLogin}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    < LoadCanvasTemplate />
                                </label>
                                <input type="text" placeholder="Type the text above" name="captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="divider"></div>
                        <div className='mx-auto mb-6'>
                            <GoogleLogin></GoogleLogin>
                        </div>
                        <p className='ml-4 mb-6'>New Here ? <Link to="/register">Create a new Account</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;