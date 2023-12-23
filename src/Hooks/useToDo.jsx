import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../AxiosInterfaces/useAxiosPublic";

const useToDo = () => {
    const axiosPublic = useAxiosPublic();

    const { data: todo = [], refetch } = useQuery({
        queryKey: ['todo'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getToDo/')
            return res.data;
        }
    })
    return [todo, refetch]
};

export default useToDo;