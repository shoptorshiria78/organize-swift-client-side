
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";


const TodoItem = ({ singleItem, refetch }) => {
    const axiosSecure = useAxiosSecure();

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

    
    const handleOnGoing = (id)=>{
        const status = "OnGoing";
        const updatedTask = {
            status,   
        }
        axiosSecure.patch(`/sendToOnGoing/${id}`, updatedTask)
        .then(res=>{
            if(res.data.modifiedCount > 0){
                toast.success('Your task has been added to On Going');
                refetch()
            }
        })
        // axiosSecure.delete(`/deleteTask/${id}`)
        //                 .then(res => {
        //                     if (res.data.deletedCount > 0) {
        //                         
        //                     }
        //                 })

    }

    return (
        < div className=" w-[200px] md:w-[300px] lg:w-[300px] border-2 border-cyan-600 mt-2 p-2" >
            <h1 className="text-blue-700 font-medium text-xl">{singleItem.title}</h1>
            <h1 className="text-blue-500 font-normal text-base">{singleItem.description}</h1>
            <h1 className="text-blue-800 font-bold text-base">{singleItem.priority}</h1>
            <h1 className="text-blue-800 font-bold text-base">Deadline:{singleItem.deadline}</h1>

            <div className="flex justify-between my-2">
                <button onClick={() => handleDelete(singleItem._id)} className="bg-emerald-700 text-white rounded px-3 py-1">DELETE</button>

                <button  className="bg-teal-500 text-white rounded px-3 py-1"> UPDATE</button>

            </div>
            <button onClick={()=>handleOnGoing(singleItem._id)} className="bg-emerald-500 text-white rounded px-3 py-1 w-full">Go to OnGoing</button>

        </div>

    )

}

export default TodoItem;