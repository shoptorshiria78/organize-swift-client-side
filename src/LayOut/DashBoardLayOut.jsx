import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/task_management_logo.jpg'


const DashBoardLayOut = () => {
    return (
        <div className="flex   max-w-[400px] md:max-w-[600px] lg:max-w-[1200px] mx-auto">
            <div className="w-40 md:w-64 lg:w-64 px-1 md:px-2 lg:px-4 py-2 bg-cyan-300 pt-10">
                <div className="flex bg-blue-50 p-2 rounded my-4">
                    <img className=" w-8 h-8 md:w-16 md:h-16 bg-cyan-100" src={logo} alt="" />
                    <div className="flex flex-col">
                        <div className="text-base md:text-3xl font-bold text-cyan-500">Organize</div>
                        <div className="text-sm md:text-xl text-cyan-400 "><span className="text-base font-bold text-cyan-500 ">S</span>wift</div>
                    </div>
                </div>
                <ul className="flex flex-col p-2">
                    <>
                        <li className="my-2 bg-red-50 py-2 rounded text-center"><NavLink style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "blue" : "emerald",
                            };
                        }} to='/dashboard/taskManagement'>Task Management</NavLink></li>

                        <li className="my-2 bg-red-50 py-2 rounded text-center"><NavLink style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ?  "blue" : "emerald",
                            };
                        }} to='/dashboard/addTask'>Add Task</NavLink></li>

                    </>

                    <div className="divider"></div>
                    <NavLink className="my-2 bg-red-50 py-2 rounded text-center" to='/' style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ?  "blue" : "emerald",
                        };
                    }}>Home</NavLink>
                </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoardLayOut;