import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import {MdLocationOn} from 'react-icons/md'
import{TfiEmail} from 'react-icons/tfi'
import{BsTelephoneFill} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="p-10 bg-red-50  text-fuchsia-600">
            <footer className="footer max-w-[450px] md:max-w-[750px] lg:max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between  ">

                <aside className="w-1/2">
                    <img className="w-16 h-16" src="https://i.ibb.co/T40Xw2V/logo-for-skin-care.png" alt="" />
                    <p >Beautify Yourself Industries Ltd.<br />Providing reliable cosmetics since 2007</p>
                </aside>
                <nav className="w-1/2" >
                    <header className="footer-title">Social</header>
                    <div className="flex">
                        <a><FaFacebook className="w-5 h-5 text-fuchsia-600 mr-3"></FaFacebook>
                        </a>
                        <a><FaGoogle className="w-5 h-5 text-fuchsia-600  mr-3"></FaGoogle></a>
                        <a><FaGithub className="w-5 h-5 text-fuchsia-600"></FaGithub></a>
                    </div>
                   

                </nav>
                <aside>
                <p className="flex items-center"><span className="mr-4 "><MdLocationOn className="w-5 h-5 text-fuchsia-600"></MdLocationOn></span>2912 Meadowbrook Road <br /> Los Angles, CA</p>
                    <p className="flex items-center"> <span className="mr-4"><TfiEmail className="w-5 h-5 text-fuchsia-600"></TfiEmail></span> beautify@gmail.com</p>
                    <p className="flex items-center"> <span className="mr-4"><BsTelephoneFill className="w-5 h-5 text-fuchsia-600"></BsTelephoneFill></span> 310-386-1623</p>
                </aside>

            </footer>
            <p className="text-fuchsia-600 text-center my-6 text-xs">Copyright © 2023 - All right reserved by Beautify Yourself Industries Ltd</p>
        </div>
    );
};

export default Footer;