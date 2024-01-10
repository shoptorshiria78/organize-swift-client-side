
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";
import { useDrag } from "react-dnd";
import {  useNavigate } from "react-router-dom";



const TodoItem = ({ singleItem, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.delete(`/deleteTask/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                toast.success('your task has been deleted')
                                refetch()
                            }
                        })

                }
            })
        } catch (error) {
            console.log(error)
        }
    } 
    
    const handleUpdate = (id) =>{
       navigate(`/dashboard/updateTask/${id}`)
    }

    const [, drag] = useDrag({
        type: 'BOX',
        item: {
           id: singleItem._id
        },
        collect: monitor => {
          return {
            isDragging: !!monitor.isDragging(),
          };
        },
      });
      
      
    

    return (
        < div ref={drag} className=" w-[150px] md:w-[180px] lg:w-[250px] border-2 border-cyan-600 mt-2 p-2 bg-cyan-100" >
            <h1 className="text-blue-700 font-medium text-xl">{singleItem.title}</h1>
            <h1 className="text-blue-500 font-normal text-base">{singleItem.description}</h1>
            <h1 className="text-blue-800 font-bold text-base">{singleItem.priority}</h1>
            <h1 className="text-blue-800 font-bold text-base">Deadline:{singleItem.deadline}</h1>

            <div className="flex justify-between my-2">
                <button onClick={() => handleDelete(singleItem._id)} className="bg-emerald-700 text-white rounded px-3 py-1">DELETE</button>

                <button onClick={() => handleUpdate(singleItem._id)}  className="bg-teal-500 text-white rounded px-3 py-1"> UPDATE</button>

            </div>

        </div>

    )

}

export default TodoItem;