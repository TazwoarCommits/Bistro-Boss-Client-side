import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000"
})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // request interceptor to add authorization header for every secure call to fetch API
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access-token")
    console.log('req stopped by interceptors', token);
    config.headers.authorization = `bearer ${token}`
    return config
  }, function (err) {
    return Promise.reject(err)
  })

  //  intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(res => {
    return res;
  }, async err => {
    const status = err.status
    console.log(status);
    if (status === 401 || status === 403) {
      await logout();
      navigate("/login");
    }
    return Promise.reject(err);
  })

  return axiosSecure
};

export default useAxiosSecure;