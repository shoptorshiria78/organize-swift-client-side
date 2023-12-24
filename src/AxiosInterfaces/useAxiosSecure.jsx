import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const axiosSecure = axios.create({
  baseURL: 'https://organize-swift-server-side.vercel.app'
})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth()
  //use interceptor for request to add token in every request.
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  //   use interceptor for response
  axiosSecure.interceptors.response.use(function (response) {
    return response
  }, async (error) => {
    const status = error.response.status;
    //    logout the user if have 401, 403 status code
    if (status === 401 || status === 403) {
      await logOut();
      navigate('/login')
    }
    return Promise.reject(error);
  })
  return axiosSecure
};

export default useAxiosSecure;