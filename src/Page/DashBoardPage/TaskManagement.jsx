import { DragDropContext } from "react-beautiful-dnd";
import useToDo from "../../Hooks/useToDo";
import { Droppable } from "react-beautiful-dnd";
import TodoItem from "../../Component/TodoItem";
import { useEffect, useState } from "react";



const TaskManagement = () => {

    const [localOnGoing, setLocalOnGoing] = useState([]);
    const [localCompleted, setLocalCompleted] = useState([]);
    const [todo, refetch] = useToDo();
    const [localTodoTask, setLocalTodoTask] = useState([]);

    // Initial setup to sync local state with database data
    useEffect(() => {
        const todoTask = todo.filter(item => item.status === "to-do");
        setLocalOnGoing([]);
        setLocalCompleted([]);
        setLocalTodoTask(todoTask);
    }, [todo]);

    // Use localTodoTask for rendering and updating UI
   

    const onDragEnd = (DropResult) => {
        const { source, destination } = DropResult;

        // Check if there's a valid destination before processing
        if (!destination) return;

        console.log(`Dragged from index ${source.index} to index ${destination.index} in droppableId ${destination.droppableId}`);

        // Get the item being dragged
        const draggedItem = localTodoTask[source.index];

        // Remove the item from the source array
        const updatedSource = [...localTodoTask];
        updatedSource.splice(source.index, 1);

        // Insert the item into the destination array
        const updatedDestination = [...localTodoTask];
        updatedDestination.splice(destination.index, 0, draggedItem);

        // Update the local state
        if (destination.droppableId === "to-do") {
            setLocalTodoTask(updatedDestination);
        } else if (destination.droppableId === "onGoing") {
            setLocalOnGoing(updatedDestination);
        } else {
            setLocalCompleted(updatedDestination);
        }
    };



    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex flex-col lg:flex-row w-52 lg:gap-6 md:w-80 lg:w-[800px] mx-auto">
                <Droppable droppableId="to-do">
                    {(provided) => (
                       
                            <div {...provided.droppableProps} ref={provided.innerRef} className="w-[270px] lg:w-[320px] mx-auto">
                                <h1 className="text-center text-teal-600 font-bold text-2xl my-4"> TO-DO</h1>
                                <div className="w-[255px] lg:w-[310px] mx-auto">
                                    {localTodoTask.map((singleItem, index) => (
                                        <TodoItem
                                            key={singleItem._id}
                                            index={index}
                                            singleItem={singleItem}
                                            refetch={refetch}
                                           
                                        ></TodoItem>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </div>
                    )}
                </Droppable>
                <div className="divider divider-horizontal"></div>
                <Droppable droppableId="onGoing">
                    {(provided) => (
                           <div  {...provided.droppableProps} ref={provided.innerRef} className="w-[270px] lg:w-[320px] mx-auto">
                                <h1 className="text-center text-teal-600 font-bold text-2xl my-4"> On-Going</h1>
                                <div className="w-[255px] lg:w-[310px] mx-auto">
                                    {localOnGoing?.map((singleItem, index) => (
                                        <TodoItem
                                            index={index}
                                            key={singleItem._id}
                                            singleItem={singleItem}
                                            refetch={refetch}

                                        ></TodoItem>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </div>
                    )}
                </Droppable>
                <div className="divider divider-horizontal"></div>
                <Droppable droppableId="completed">
                    {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} className="w-[270px] lg:w-[320px] mx-auto">
                                <h1 className="text-center text-teal-600 font-bold text-2xl my-4">Completed</h1>
                                <div className="w-[255px] lg:w-[310px] mx-auto">
                                    {localCompleted?.map((singleItem, index) => (
                                        <TodoItem
                                            index={index}
                                            key={singleItem._id}
                                            singleItem={singleItem}
                                            refetch={refetch}

                                        ></TodoItem>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>

    );
};

export default TaskManagement;
