import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../AxiosInterfaces/useAxiosPublic";
import useAuth from "./useAuth";

const useToDo = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const { data: todo = [], refetch } = useQuery({
        queryKey: ['todo'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/getToDo/${user.email}`)
            return res.data;
        }
    })
    return [todo, refetch]
};

export default useToDo;