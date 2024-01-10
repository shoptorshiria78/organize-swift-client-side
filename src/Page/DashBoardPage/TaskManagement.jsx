
import useToDo from "../../Hooks/useToDo";
import TodoItem from "../../Component/TodoItem";
import { useDrop } from "react-dnd";
import useAxiosSecure from "../../AxiosInterfaces/useAxiosSecure";
import toast from "react-hot-toast";
import CompletedBox from "../../Component/CompletedBox";


const TaskManagement = () => {


    const axiosSecure = useAxiosSecure();
    const [todo, refetch] = useToDo();

    const todoTask = todo.filter(item => item.status === "to-do");
    const onGoingTask = todo.filter(item => item.status === "OnGoing");
    const CompletedTask = todo.filter(item => item.status === "GoCompleted");
    // console.log(todo);
    // console.log(todoTask);
    // console.log(onGoingTask);

    const markAsCompleted = (id) => {
        const onCompletedTask = todo.filter((task) => task._id === id)[0];
        console.log(onCompletedTask);

        const status = "GoCompleted";
        const updatedTask = {
            status,
        }
        axiosSecure.patch(`/sendToGoCompleted/${id}`, updatedTask)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Your task has been added to completed');
                    refetch()
                }
            })
    }
    const markAsOnGoing = (id) => {
        const onGoingTask = todo.filter((task) => task._id === id)[0];
        console.log(onGoingTask);

        const status = "OnGoing";
        const updatedTask = {
            status,
        }
        axiosSecure.patch(`/sendToOnGoing/${id}`, updatedTask)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Your task has been added to On Going');
                    refetch()
                }
            })
    }

    const [, drop] = useDrop({
        accept: 'BOX',
        drop: (item) => markAsOnGoing(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    })

    return (

        <div>
            <h1 className="text-4xl text-orange-500 text-center my-4 font-bold">Organize Your Task</h1>
            <div className="flex flex-col lg:flex-row w-[200px] lg:gap-6 md:w-[300px] lg:w-[800px] lg:mx-auto p-4">
                <div className="bg-red-200 p-3 rounded-md">
                    <div className="w-[150px] md:w-[200px] lg:w-[250px] mx-auto">
                        <h1 className="text-center text-teal-600 font-bold text-2xl my-4"> TO-DO</h1>
                        <div className="w-[180px] md:w-[280px] lg:w-[310px] mx-auto">
                            {todoTask.map((singleItem, index) => (
                                <TodoItem
                                    key={singleItem._id}
                                    index={index}
                                    singleItem={singleItem}
                                    refetch={refetch}

                                ></TodoItem>
                            ))}

                        </div>
                    </div>

                </div>

                <div ref={drop} className="bg-yellow-200 p-3 rounded-md">

                    <div className="w-[150px] md:w-[200px] lg:w-[250px] mx-auto">
                        <h1 className="text-center text-teal-600 font-bold text-2xl my-4"> On-Going</h1>
                        <div className="w-[180px] md:w-[280px] lg:w-[310px] mx-auto">
                            {onGoingTask.map((singleItem, index) => (
                                <TodoItem
                                    key={singleItem._id}
                                    index={index}
                                    singleItem={singleItem}
                                    refetch={refetch}

                                ></TodoItem>
                            ))}
                        </div>
                    </div>

                </div>

                <CompletedBox markAsCompleted={markAsCompleted}>

                    <div className="w-[150px] md:w-[200px] lg:w-[250px] mx-auto">
                        <h1 className="text-center text-teal-600 font-bold text-2xl my-4"> Completed</h1>
                        <div className="w-[180px] md:w-[280px] lg:w-[310px] mx-auto">
                            {CompletedTask.map((singleItem, index) => (
                                <TodoItem
                                    key={singleItem._id}
                                    index={index}
                                    singleItem={singleItem}
                                    refetch={refetch}

                                ></TodoItem>
                            ))}
                        </div>
                    </div>

                </CompletedBox>
            </div>
        </div>


    );
};

export default TaskManagement;
