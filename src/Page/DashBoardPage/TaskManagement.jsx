import { DndProvider } from "react-dnd";
import Completed from "../../Component/Completed";
import OnGoing from "../../Component/OnGoing";
import ToDo from "../../Component/ToDo";
import { HTML5Backend } from "react-dnd-html5-backend";


const TaskManagement = () => {



    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex flex-col lg:flex-row w-52 lg:gap-6 md:w-80 lg:w-[800px] mx-auto">
                <div className="w-[270px] lg:w-[320px] mx-auto">
                    <h1 className="text-center text-teal-600 font-bold text-2xl my-4"> TO-DO</h1>
                    <ToDo></ToDo>
                </div>
                <div className="divider divider-horizontal"></div>

                <div className="w-[270px] lg:w-[320px] mx-auto">
                    <h1 className="text-center text-teal-600 font-bold text-2xl my-4"> On-Going</h1>
                    <OnGoing></OnGoing>

                </div>
                <div className="divider divider-horizontal"></div>

                <div className="w-[270px] lg:w-[320px] mx-auto">
                    <h1 className="text-center text-teal-600 font-bold text-2xl my-4">Completed</h1>
                    <Completed></Completed>
                </div>
            </div>
        </DndProvider>
    );
};

export default TaskManagement;