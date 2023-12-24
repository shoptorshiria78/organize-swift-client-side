import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {MdLocationOn} from 'react-icons/md'
import{TfiEmail} from 'react-icons/tfi'
import{BsTelephoneFill} from 'react-icons/bs'
import logo from "../assets/task_management_logo.jpg"

const Footer = () => {
    return (
        <div className="p-10 bg-blue-50  text-cyan-600">
            <footer className="footer max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between  ">

                <aside className="w-1/2">
                    <img className="w-16 h-16" src={logo} alt="" />
                    <p >Organize Swift Industries Ltd.</p>
                </aside>
                <nav className="w-1/2" >
                    <header className="footer-title">Social</header>
                    <div className="flex">
                        <a><FaFacebook className="w-5 h-5 text-cyan-600 mr-3"></FaFacebook>
                        </a>
                        <a><FaGoogle className="w-5 h-5 text-cyan-600  mr-3"></FaGoogle></a>
                        <a><FaGithub className="w-5 h-5 text-cyan-600"></FaGithub></a>
                    </div>
                   

                </nav>
                <aside>
                <p className="flex items-center"><span className="mr-4 "><MdLocationOn className="w-5 h-5 text-cyan-600"></MdLocationOn></span> Garibe Newaz Aveneue <br /> Uttara, Dhaka</p>
                    <p className="flex items-center"> <span className="mr-4"><TfiEmail className="w-5 h-5 text-cyan-600"></TfiEmail></span> organize@gmail.com</p>
                    <p className="flex items-center"> <span className="mr-4"><BsTelephoneFill className="w-5 h-5 text-cyan-600"></BsTelephoneFill></span> 310-386-1623</p>
                </aside>

            </footer>
            <p className="text-cyan-600 text-center my-6 text-xs">Copyright © 2023 - All right reserved by Organize Swift Industries Ltd</p>
        </div>
    );
};

export default Footer;