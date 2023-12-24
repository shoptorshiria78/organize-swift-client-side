
import useToDo from "../../Hooks/useToDo";
import TodoItem from "../../Component/TodoItem";
import OnGoingItem from "../../Component/OnGoingItem";
import CompletedItem from "../../Component/CompletedItem";


const TaskManagement = () => {


    const [todo, refetch] = useToDo();

    const todoTask = todo.filter(item => item.status === "to-do");
    const onGoingTask = todo.filter(item => item.status === "OnGoing");
    const CompletedTask = todo.filter(item => item.status === "GoCompleted");
    console.log(todo);
    console.log(todoTask);
    console.log(onGoingTask);

    return (
       
            <div className="flex flex-col lg:flex-row w-[200px] lg:gap-6 md:w-[300px] lg:w-[800px] lg:mx-auto">
                <div>
                    <div className="w-[180px] md:w-[280px] lg:w-[320px] mx-auto">
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
                <div className="divider divider-horizontal"></div>
                <div>

                    <div className="w-[180px] md:w-[280px] lg:w-[320px] mx-auto">
                        <h1 className="text-center text-teal-600 font-bold text-2xl my-4"> On-Going</h1>
                        <div className="w-[180px] md:w-[280px] lg:w-[310px] mx-auto">
                            {onGoingTask.map((singleItem, index) => (
                                <OnGoingItem
                                    key={singleItem._id}
                                    index={index}
                                    singleItem={singleItem}
                                    refetch={refetch}

                                ></OnGoingItem>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="divider divider-horizontal"></div>
                <div>

                    <div className="w-[180px] md:w-[280px] lg:w-[320px] mx-auto">
                        <h1 className="text-center text-teal-600 font-bold text-2xl my-4"> Completed</h1>
                        <div className="w-[180px] md:w-[280px] lg:w-[310px] mx-auto">
                        {CompletedTask.map((singleItem, index) => (
                                <CompletedItem
                                    key={singleItem._id}
                                    index={index}
                                    singleItem={singleItem}
                                    refetch={refetch}

                                ></CompletedItem>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
       

    );
};

export default TaskManagement;
