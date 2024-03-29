import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../AxiosInterfaces/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const UpdateTask = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useAuth();

    const onSubmit = (data) => {
        
        const title = data.title;
        const description = data.description;
        const priority = data.priority;
        const deadline = startDate ;
        const status = "to-do";
        const email = user.email;

        console.log(email)
        const task = {
            title,
            description,
            priority,
            deadline,
            status,
            email

        }
        console.log(task);

        axiosSecure.post('/addTask', task)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Your task has been created');
                    reset()
                }
            })
    }

    return (
        <div className=' w-[160px] md:w-[200px] lg:w-[400px] lg:ml-20 '>
            <h1 className="text-3xl font-bold text-center mt-20 mb-10 text-cyan-400">Update Your Task </h1>
            <form className="flex flex-col w-[150px] md:w-[200px] lg:w-[400px] mx-auto " onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label className="label">
                    <span className="label-text font-medium text-cyan-500">Title</span>
                </label>
                <input className=" border-blue-500 border-2 py-2 px-2 rounded w-[400px]" placeholder="Write Your title here" {...register("title", { required: true })} />
                {errors.exampleRequired && <span>Title field is required</span>}

                <label className="label">
                    <span className="label-text font-medium text-cyan-500">Description</span>
                </label>
                <input className=" border-blue-500 border-2 py-2 px-2 rounded w-[400px]" placeholder="Write Your description here" {...register("description", { required: true })} />
                {errors.description && <span>Description field is required</span>}

                <label className="label">
                    <span className="label-text font-medium text-cyan-500">Priority</span>
                </label>

                <select className=" border-blue-500 border-2 py-2 px-2 rounded w-[400px]" 
                 {...register("priority")}  >
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                </select> 
                {errors.priority && <span>Priority field is required</span>}

                <label className="label">
                    <span className="label-text font-medium text-cyan-500" >Deadline</span>
                </label>
                <DatePicker className=" border-blue-500 border-2 py-2 px-2 rounded w-[400px]" selected={startDate} onChange={(date) => setStartDate(date)} />
                

                {/* include validation with required or other standard HTML validation rules */}


                <input   className=" border-blue-500 border-2 py-2 px-2 rounded w-[400px] bg-blue-500 mt-6 mb-10 text-white" type="submit" />
            </form>
        </div>
    );
};

export default UpdateTask;