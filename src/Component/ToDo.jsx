import toast from "react-hot-toast";
import useAxiosSecure from "../AxiosInterfaces/useAxiosSecure";
import useToDo from "../Hooks/useToDo";
import Swal from "sweetalert2";



const ToDo = () => {

   const [todo, refetch] = useToDo();
   console.log(todo);
   const axiosSecure = useAxiosSecure();

   const handleDelete = async(id)=>{
    try{
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
                .then(res=>{
                    if(res.data.deletedCount>0){
                        toast.success('your task has been deleted')
                        refetch()
                    }
                })   
                        
            }
          })
      }catch(error){
            console.log(error)
      }   
   }

   

    return (
        <div >
           {
            todo.map(item=><div className=" w-[250px] lg:w-[300px] border-2 border-cyan-600 mt-2 p-2" key={item._id}>
                <h1 className="text-blue-700 font-medium text-xl">{item.title}</h1>
                <h1 className="text-blue-500 font-normal text-base">{item.description}</h1>
                <h1 className="text-blue-800 font-bold text-base">{item.priority}</h1>
                <h1 className="text-blue-800 font-bold text-base">Deadline:{item.deadline}</h1>
               <div className="flex justify-between my-2"> <button onClick={()=>handleDelete(item._id)} className="bg-emerald-700 text-white rounded px-3 py-1">DELETE</button> <button className="bg-teal-500 text-white rounded px-3 py-1"> UPDATE</button></div>
            </div>)
           }
        </div>
    );
};

export default ToDo;