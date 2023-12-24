
import { AiFillBank } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FcBusinessman } from "react-icons/fc";

const Users = () => {
    return (
        <div className="max-w-[1200px] mx-auto bg-emerald-200 py-2 px-5 my-16">
            <h1 className="text-4xl mt-20 mb-5 text-cyan-500 text-center font-bold">Our Consumer</h1>
            <h1 className="text-center text-cyan-400  text-lg">Lets get benefited from us</h1>
            <div className="flex flex-col lg:flex-row gap-4 my-10 mb-20">
                <div className="bg-teal-100 py-10 px-3 rounded-xl">
                    <AiFillBank className="mx-auto text-cyan-500 text-3xl" />
                    <p className="text-center text-cyan-500 font-bold text-xl">Banker</p>
                    <p className="text-center text-cyan-600  text-sm">It is so much helpful for Banker to be organized with his or her schedules </p>
                </div>
                <div className="bg-teal-100 py-10 px-3 rounded-xl">
                    <FaReact className="mx-auto text-cyan-500 text-3xl" />
                    <p className="text-center text-cyan-500 font-bold text-xl" >Developer</p>
                    <p className="text-center text-cyan-600  text-sm">Developers can assemble their tasks easily By organize swift</p></div>
                <div className="bg-teal-100 py-10 px-3 rounded-xl">
                    <MdCorporateFare className="mx-auto text-cyan-500 text-3xl" />
                    <p className="text-center text-cyan-500 font-bold text-xl" >Corporate Professionals</p>
                    <p className="text-center text-cyan-600  text-sm">It is so much helpful for Corporate Professionals to sort  his or her Jobs </p></div>
                <div className="bg-teal-100 py-10 px-3 rounded-xl">
                    <PiStudent className="mx-auto text-cyan-500 text-3xl" />
                    <p className="text-center text-cyan-500 font-bold text-xl" >student</p>
                    <p className="text-center text-cyan-600  text-sm">student can manage their study easily By organize swift</p>
                </div>
                <div className="bg-teal-100 py-10 px-3 rounded-xl">
                    <FcBusinessman className="mx-auto text-cyan-500 text-3xl" />
                    <p className="text-center text-cyan-500 font-bold text-xl" >Businessman</p>
                    <p className="text-center text-cyan-600  text-sm">Businessman can arrange their business planning easily By organize swift</p>
                </div>

            </div>
        </div>
    );
};

export default Users;