import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://organize-swift-server-side.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;